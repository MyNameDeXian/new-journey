export const text = {}

text.noLineOmit = `
title 段落不换行以省略号结束
# 段落不换行以省略号结束的 css 样式
---code---
.font{
	overflow: hidden;        //超出隐藏
	white-space: nowrap;     //不换行
	text-overflow: ellipsis; //超出以省略号...结尾
}
---code---
`
text.textIndent = `
title text-indent
# text-indent 设置文本块中首行文本的缩进
---code---
text-indent: 50px | .5em | .5rem | 50%;
---code---
----
注释：允许使用负值。如果使用负值，那么首行会被缩进到左边。
这最常用于建立一个“标签页”效果。允许指定负值，这会产生一种“悬挂缩进”的效果。
----
`
text.textAlign = `
title text-align
# text-align 设置元素中的文本的水平对齐方式
---code---
text-align: left | right | center;
---code---
# 可能值描述
---table---
值 描述
left  把文本排列到左边。默认值：由浏览器决定。
right 把文本排列到右边。
center 把文本排列到中间。
---table---
`
text.wordSpacing = `
title word-spacing
# word-spacing 增加或减少单词间的空白（即字间隔）
---code---
word-spacing: normal | -5px | 5px | .5em | .5rem;
---code---
# 可能值描述
---table---
值 描述
normal  默认。定义单词间的标准空间。
length  定义单词间的固定空间, 允许负值 | 单位 px 、 em 、 rem; 
---table---
-----
该属性定义元素中字之间插入多少空白符。针对这个属性，“字” 定义为由空白符包围的一个字符串。如果指定为长度值，会调整字之间的通常间隔；所以，normal 就等同于设置为 0。允许指定负长度值，这会让字之间挤得更紧
--------
`
text.letterSpacing = `
title letter-spacing
# letter-spacing 增加或减少字符间的空白（字符间距）
---code---
letter-spacing: normal | -5px | 5px | .5em | .5rem;
---code---
# 可能值描述
---table---
值 描述
normal  默认。定义单词间的标准空间。
length  定义单词间的固定空间, 允许负值 | 单位 px 、 em 、 rem; 
---table---
-----
该属性定义了在文本字符框之间插入多少空间。由于字符字形通常比其字符框要窄，指定长度值时，会调整字母之间通常的间隔。因此，normal 就相当于值为 0。
-----
`