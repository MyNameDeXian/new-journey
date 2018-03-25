//替换特殊字符
export function specialChar(char, symbol){
	let reg = new RegExp(char, 'g')
	text = text.replace(reg, symbol);
}
//公共匹配标志内的内容
function replaceText(str, reg, callback){
	//把多个字符标志替换成一个不常用的特殊字符，正则匹配更方便
	str = str.replace(reg,'夶');
	// [^夶]* 表示匹配除了(夶)的任意字符
	str = str.replace(/夶\n([^夶]*)夶?/g, (text, $1) =>{
		//去除头尾换行
		$1 = $1.replace(/(^\n*|\n*$)/g,'');
		return !$1 ? '' : callback($1);
	})
	return str.replace(/(^\n*|\n*$)/g,'')
}
//替换代码内容文本
export function codeText(str){
	// 代码节点
	const codes = code =>(
		`<div class='ctn-code'>
			<pre>${code}</pre>
		</div>`
	)
	return replaceText(str, /---code-*/g, codes);
}
//替换标题
export function titleText(str){
	let i = 1;
	const titleDom = title =>(
		`\n<div class='ctn-title'>${i++}. ${ title }</div>`
	)
	return str.replace(/\n?#+ ([^\n]+)/g, (reg, $1)=>{
		console.log($1)
		return !$1 ? '' : titleDom($1)
	})
}
//匹配文本内容
export function ctnText(str){
	const lineDom = ctn =>(
		`<p class='ctn-text'>${ctn}</p>`
	)
	const textDoms = ctns =>{
		ctns = ctns.split('\n');
		let str = '';
		for(let i=0; i<ctns.length; i++){
			str += lineDom(ctns[i])
		}
		return str + '\n'
	}
	return replaceText(str, /----*/g, textDoms);
}
//匹配表格内容
export function tabelText(str){
	const table = trs =>(
		`<table class='ctn-table'>${trs}</table>`
	)
	const tr = tds =>( 
		`<tr>${tds}</tr>`
	)
	const td = ctn =>(
		`<td>${ctn}</td>`
	)
	const tableDom = str =>{
		str = str.split('\n');
		str = str.map(item =>{
			if(typeof(item) !== 'string') return '';
			let tds = item.split(' ');
			tds = tds.map(ctn => td(ctn))
		})
	}
	return replaceText(str, /---tabel-*/g, tableDom);
}
