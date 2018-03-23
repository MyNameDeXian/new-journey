//公共匹配标志内的内容
function replaceText(str, reg, callback){
	str = str.replace(reg,'夶');
	str = str.replace(/夶\n([^夶]*)夶?/g, (text, $1) =>{
		return !$1 ? '' : callback($1);
	})
	return str
}
//替换代码内容文本
function codeText(str){
	const codes = code =>(
		`<div className='code-comp'>
			<pre>${code}</pre>
		</div>`
	)
	return replaceText(str, /---code-*/g, codes);
}
//替换标题
function titleText(str){
	return str.replace(/\n# ([^\n]+)/g, (reg, $1)=>{
		return !$1 ? '' : `\n<div className='ctn-title'>${ $1 }</div>`
	})
}
//匹配文本内容
export function ctnText(str){
	const ctnDom = ctn =>(
		`<p className='content-comp'>${ctn}</p>`
	)
	const ctnDoms = ctns =>{
		ctns = ctns.replace(/(^\n|\n$)/g, '');
		ctns = ctns.split('\n');
		let str = '';
		for(let i=0; i<ctns.length; i++){
			str += ctnDom(ctns[i])
		}
		return str + '\n'
	}
	return replaceText(str, /----*/g, ctnDoms);
}
//匹配表格内容
export function tabelText(str){
	const lineDom = (...td) =>{
		let str = ''
		for(let i=0; i<td.length; i++){
			
		}
	}
	return replaceText(str, /---tabel-*/g, ctnDoms);
}