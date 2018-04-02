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
title text-indent 首行缩进
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
title text-align 水平对齐
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
title word-spacing 单词间距
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
title letter-spacing 字体间距
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
text.whiteSpace = `
title white-space 处理换行空白
# white-space 设置如何处理元素内的空白
---code---
white-space: normal | pre | nowrap | pre-wrap | pre-line;
---code---
# 可能值描述
---table---
值 描述
normal 默认。空格换行等空白符会被浏览器忽略。
pre    空白会被浏览器保留。其行为方式类似 HTML 中的 <pre> 标签。
nowrap 文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。
pre-wrap 保留空白符序列，但是正常地进行换行。
pre-line 合并空白符序列，但是保留换行符。
---table---
`
text.wordBreak = `
title word-break 换行规则
# word-break 属性规定自动换行的处理方法
---code---
word-break: normal | break-all | keep-all;
---code---
# 可能值描述
---table---
值 描述
normal    使用浏览器默认的换行规则。
break-all 允许在单词内换行。
keep-all  只能在半角空格或连字符处换行。
---table---
`
text.wordWrap = `
title word-wrap 单词URL换行
# word-wrap 属性允许长单词或 URL 地址换行到下一行
---code---
word-wrap: normal | break-word;
---code---
# 可能值描述
---table---
值 描述
normal     只在允许的断字点换行（浏览器保持默认处理）。
break-word 允许长单词或 URL 地址内部进行换行。
---table---
`
text.textOverflow = `
title text-overflow
# text-overflow 设置当文本溢出包含元素时发生的事情
---code---
text-overflow: clip | ellipsis | string;
---code---
# 可能值描述
---table---
值 描述
clip     修剪文本。
ellipsis 显示省略符号来代表被修剪的文本。
string   使用给定的字符串来代表被修剪的文本。
---table---
`
text.textShadow = `
title text-shadow
# text-shadow 属性向文本设置阴影
---code---
text-shadow: 5px 5px 5px #000;
---code---
# 可能值描述
---table---
值 描述
h-shadow 必需。水平阴影的位置。允许负值
v-shadow 必需。垂直阴影的位置。允许负值
blur  可选。模糊的距离
color 可选。阴影的颜色
---table---
`
text.textDecoration = `
title text-decoration
# text-decoration 属性规定添加到文本的修饰
---code---
text-decoration: none | underline |overline | line-through | blink;
---code---
# 可能值描述
---table---
值 描述
none         默认。定义标准的文本。
underline    定义文本下的一条线。
overline     定义文本上的一条线。
line-through 定义穿过文本下的一条线。
blink        定义闪烁的文本。
---table---
----
注释：IE、Chrome 或 Safari 不支持 "blink" 属性值	
----
# 说明
----
这个属性允许对文本设置某种效果，如加下划线。如果后代元素没有自己的装饰，祖先元素上设置的装饰会“延伸”到后代元素中。不要求用户代理支持 blink。
----
`
text.textTransform = `
title text-transform
# text-transform 属性控制文本的大小写
---code---
text-transform: none | capitalize | uppercase | lowercase;
---code---
# 可能值描述
---table---
值 描述
none       默认。定义带有小写字母和大写字母的标准的文本。
capitalize 文本中的每个单词以大写字母开头。
uppercase  定义仅有大写字母。
lowercase  定义无大写字母，仅有小写字母。
---table---
`
text.direction = `
title direction 文本方向
# direction 属性规定文本的方向 / 书写方向
---code---
direction: ltr | rtl;
---code---
# 可能值描述
---table---
值 描述
ltr  默认。文本方向从左到右。
rtl  文本方向从右到左。
---table---
`