export const commonTags = {}

commonTags.html = `
title <html>
# html 元素可告知浏览器其自身是一个 HTML 文档
---code---
<!DOCTYPE html>
<html>
	<head>
		<meta />
	</head>
	<body>
	</body>
</html>
---code---
------
注释：
	<html> 与 </html> 标签限定了文档的开始点和结束点，在它们之间是文档的头部和主体。
	文档的头部由 <head> 标签定义，而主体由 <body> 标签定义。
	doctype 元素必须位于 html 元素之前。
------
`
commonTags.head = `
title <head>
# head 标签用于定义文档的头部，它是所有头部元素的容器.
-----
	head 中的元素可以引用脚本、指示浏览器在哪里找到样式表、提供元信息等等。
-----
---code---
<head>
	<base href='url'> 
	<link rel="stylesheet" type="text/css" href="theme.css" />
	<meta />
	<title>标题</title>
	<style> body{color: #333;} </style>
	<script type="text/javascript" src='jsUrl.js'></script>
</head>
---code---
`
commonTags.body = `
title <body>
# body 元素定义文档的主体, css控制的最高节点...
---code---
//不同的浏览器会给body元素默认的边距，去除默认边距
.body{
	padding: 0;
	margin: 0;
}
// 设置body 高度等于内容区域高度, 相当于 window.innerHeight
html, body{
	height: 100%;
}
// 有一些浏览器需要设置 html 100%, 才支持 body 100% 高度
---code---
# body 元素包含文档的所有内容 (比如文本、超链接、图像、表格和列表等等)
`
commonTags.a = `
title <a>

`
commonTags.div = `
title <div>

`
commonTags.p = `
title <p>
`
