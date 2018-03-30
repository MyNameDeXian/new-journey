// 字符串颜色
export const color = {};
/* 
reg字符串或正则对象，
str字符串对象，
color字符串颜色，
*/
color.repl = function(reg, str, color, font){
	return (str || '').replace(reg, (e, $_1)=>{
		return `<span style=color:#${color};font-size:${font||''}>${ e }</span>`
	})
}
// 字符串颜色 #090
color.strColor = function(str){
	let reg = /('|")([#\a-zA-Z]+)('|")?/g;
	return (str || '').replace(reg, `<span style=color:#090>"$2"</span>`)
}
color.code = function(str){
	str = str.replace(/	/g, '  ');
	// 常用对象 颜色 #00f
	for(let key in this.commons){
		let reg = new RegExp(this.commons[key], 'g');
		str = str.replace(reg, `<span style=color:#00f>${key}</span>`)
	}
	// 字符串颜色
	str = this.strColor(str);
	// 注释的颜色 #008200 
	str = str.replace(/(\/\/.*\n)/g, `<span style=color:#008200;font-size:14px>$1</span>`)
	return str;
}
// 常用对象api
color.commons ={
	function: 'function',
	return: 'return',
	this: 'this',
	event: 'event',
	class: 'class'
}