export const globalAttr = {}

globalAttr.class = `
title class 类名
# 可以给 HTML 元素赋予单个或多个 class , 以空格分隔，例如:
---code---
<div	class='menu botton'></div>
---code---
# .class 属性大多数时候用于指向样式表中的类（class）
---code---
.menu{
	width: 100px;
	height: 20px;
}
.botton{
	background: #ccc;
}
---code---
# .class 可以通过 JavaScript 来改变带有指定 class 的 HTML 元素
---code---
// 利用 class 获取 dom 的几种方法：
var dom = document.getElementsByClassName('menu');
var dom = document.querySelector('.menu');    // 返回单个 dom 对象
var dom = document.querySelectorAll('.menu'); // 返回 dom 对象数组集合

dom.className // 返回 dom 的所有 class ，'menu botton'
dom.className = 'left_menu botton' // 可以直接修改 className
---code---
# .classList 类列表
---code---
// 新增一个 'left_menu' 的class, 若已存在则不改变
dom.classList.add('left_menu')   

// 删除 'left_menu' 的class，若不存在则不改变
dom.classList.remove('left_menu')  

// 把 'menu' 替换成 'left_menu'，若 'menu' 不存在则不发生改变
dom.classList.replace('menu', 'left_menu') 
---code---
-----
注意：类名不能以数字开头
注意：class 属性不能在以下 HTML 元素中使用：base, head, html, meta, param, script, style 以及 title
-----
`
globalAttr.id = `
# id 说明
----
	id 属性规定 HTML 元素的唯一的 id。
	id 在 HTML 文档中必须是唯一的。
	id 属性可用作链接锚（link anchor）。
----
# 通过 JavaScript 操作带有指定 id 的元素
---code---
// 通过 id 获取 dom 的几种方式
var dom = document.getElementById('id');
var dom = document.querySelector('#id');
---code---
# 通过 id 和 <a> 标签制作链接锚点
---code---
// <a> 标签属性 href 设置方式 ( #号 + 命名 )
<a href="#top">点击跳转</a>

//在跳转到的地方，设置元素的 id 和 name 都需要和 <a> 标签的 href 值一致。
<span id='top' name='top'>跳转到这里</span>
---code---
# 通过 id 给元素添加样式，(不建议使用)
---code---
#id{
	background: #aaa;
}
---code---
`
