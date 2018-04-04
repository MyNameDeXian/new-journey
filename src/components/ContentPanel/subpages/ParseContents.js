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
//复制代码
window.copyCode = (el) =>{
	let code = el.nextElementSibling.innerText;
	let input = document.getElementById('copyText');
	input.value = code.replace(/\n/g, '\n');
	input.focus();
	input.select();
	let copy = document.execCommand('copy');
	console.log(copy,input.value)
}
//替换代码内容文本
export function codeText(str){
	// 代码节点
	const codes = (code) =>(
		`<div class='ctn-code'>
			<div class='copy-btn' onclick=copyCode(this)>复制</div>
			<pre id='copyCode'>${code}</pre>
		</div>`
	)
	return replaceText(str, /---code-*/g, codes);
}
//替换标题
export function titleText(str){
	let i = 1;
	const titleDom = title =>(
		`\n<div class='ctn-title flex-row'>
			<p class='ctn-title-item'>${i++}. ${title}</p>
			<p class='f-1 ctn-title-line'></p>
		</div>`
	)
	return str.replace(/\n?#+ ([^\n]+)/g, (reg, $1)=>{
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
			let ctn = ctns[i];
			ctn = ctn.replace(/^ +/g, '&nbsp;◆&nbsp;&nbsp;');
			ctn = ctn.replace(/^	+/g, '&nbsp;◆&nbsp;&nbsp;');
			ctn = ctn.replace(/^(注意(:|：))/, '$1'.fontcolor('red'))
			ctn = ctn.replace(/^((提示|注释)(:|：))/, '$1'.fontcolor('#ff9955'))
			str += lineDom(ctn)
		}
		
		return str + '\n'
	}
	return replaceText(str, /----*/g, textDoms);
}
//匹配表格内容
export function tableText(str){
	const table = trs =>(
		`<table class='ctn-table'>${trs}</table>`
	)
	const tr = tds =>( 
		`<tr>${tds}</tr>`
	)
	const th = th =>(
		`<th>${th}</th>`
	)
	const td = (ctn, width) =>{
		return `<td style='width:${width}'>${ctn}</td>`
	}
	
	const tableDom = str =>{
		str = str.split('\n');
		let width = '';
		if(/^\d+%/.test(str[0])){
			width = str.splice(0,1)[0]
		}
		str = str.map((item, i) =>{
			if(typeof(item) !== 'string') return '';
			let spl = '夶' //以特殊字符标志分割
			item = item.replace(/ +/, spl)
			let tds = item.split(spl);
			if(i === 0){
				tds = tds.map(ctn => th(ctn));
			} else{
				tds = tds.map((ctn, i)=>{ 
					if(i === 0)
						return td(ctn, width)
					else {
						ctn = ctn.replace(/\|/g, '<br\>')
						return td(ctn)
					}
				});
			}
			return tr(tds.join(''));
		})
		return table(str.join(''))
	}
	return replaceText(str, /---table-*/g, tableDom);
}
