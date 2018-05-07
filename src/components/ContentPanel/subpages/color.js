export const color = {};
// 字符串颜色 #090
color.strColor = function(str){
	// str = (str || '').replace(reg2, `<span style=color:#090>"$1"</span>`)
	if( !str ) return '';
	str = str.replace(/"([^"]*)"/g, `<span style=color:#090>"$1"</span>`);
	str = str.replace(/'([^']*)'/g, `<span style=color:#090>"$1"</span>`);
	return str;
}
color.code = function(str){
	str = str.replace(/	/g, '  ');
	// 字符串颜色
	str = this.strColor(str);
	// 常用对象 颜色 #00f
	for(let key in this.commons){
		let reg = new RegExp('(\n| )'+this.commons[key], 'g');
		str = str.replace(reg, `<span style=color:#00f>${key}</span>`)
	}
	return str;
}
color.zhushi = function(str){
	// 注释的颜色 #008200 
	let zhushi = '#588'
	str = str.replace(/(\/\/.*\n)/g, `<span style=color:${zhushi};font-size:14px>$1</span>`)
	return str;
}
// 常用对象api
color.commons ={
	function: 'function',
	return: 'return',
	this: 'this',
	class: 'class'
}