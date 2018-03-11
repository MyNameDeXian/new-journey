// 字符串颜色
export const color = {};
/* 
reg字符串或正则对象，
str字符串对象，
color字符串颜色，
*/
color.repl = function(reg, str, color){
	return (str || '').replace(reg, (e, $_1)=>{
		return `<span style='color:#${color}'>${ e }</span>`
	})
}
// 字符串颜色 #090
color.strColor = function(str){
	let reg = /('|")([a-zA-z]+)('|")/g;
	return (str || '').replace(reg, '"$2"'.fontcolor('#090'));
}
color.code = function(str){
	str = str.replace(/	/g, '  ');
	// 常用对象 颜色 #00f
	for(let key in this.commons){
		let reg = new RegExp(this.commons[key], 'g');
		str = this.repl(reg, str, '00f');
	}
	// 字符串颜色
	str = this.strColor(str);
	// 注释的颜色 #008200 
	str = this.repl(/(\/\/.*\n)/g, str, '008200 ');
	return str;
}
// 常用对象api
color.commons ={
	function: 'function',
	return: 'return',
	this: 'this',
	event: 'event'
}