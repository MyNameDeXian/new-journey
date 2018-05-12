export const style = {};

style.unit = `
title 单位换算 px em rem % 
# 像素 PX 固定单位，无需换算
---code---
font-size: 16px;
width: 200px;
...
---code---
# rem 相对根元素 HTML 的 font-size 计算
---code---
//html
font-size: 24px;
//当前元素
font-size: .5rem; => font-size: .5 * 24 = 12px;
width: 5rem;  => width: 5 * 24px = 120px;
height: 2rem; => height: 2 * 24px = 48px;
---code---
# % 相对父元素计算
---code---
//父元素
font-size: 30px;
width: 100px;
//当前元素
font-size: 50%; => font-size: 50% * 30 = 15px;
width: 50%; => width: 50% * 100 = 50px;
---code---
# em 相对 font-size 计算
若当前元素没设置 font-size, 则相对父元素 font-size
---code---
//父元素 
font-size: 16px;
//当前元素
width: 2em; => width: 2 * 16 = 32px;
height: .5em; => height: .5 * 16 = 8px;
---code---
若当前元素设置了 font-size, 则相对当前元素 font-size
---code---
//父元素 
font-size: 16px;
//当前元素
font-size: 1.5em; => font-size: 1.5 * 16 = 24px;
width: 2em; => width: 2 * 24 = 48px;
height: .5em; => height: .5 * 24 = 12px;
---code---
-----
注释：
	若当前元素没有设置 font-size 属性，则单位 em 都会根据父元素的 font-size 来计算。
	若当前元素设置了font-size属性，则单位 em 除了font-size属性根据父元素font-size的计算外，其他属性会根据当前元素的 font-size 来计算。
-----
`
style.display = `
title display 元素框类型
# display 元素生成的框的类型值描述
---code---
display: none | block | flex | inline | inline-block;
---code---
# 可能值描述
---table---
值 描述
none   此元素不会被显示。
block  此元素将显示为块级元素，此元素前后会带有换行符。
inline 此元素会被显示为内联元素，元素前后没有换行符。
inline-block 行内块元素。
table  此元素会作为块级表格来显示（类似 <table>），表格前后带有换行符。
list-item 此元素会作为列表显示。
flex   将对象作为弹性伸缩盒显示。（伸缩盒最新版本）（CSS3）
inline-flex 将对象作为内联块级弹性伸缩盒显示。（伸缩盒最新版本）（CSS3）
---table---
`
style.position = `
title position 定位
# position 属性规定元素的定位类型
---code---
position: relutive | absolute | fixed;
---code---
# z-index 设置定位元素堆叠顺序
---code---
z-index: number; //值为数字
z-index: 99;
---code---
# 可能值描述
---table---
值 描述
relative 生成相对定位的元素，相对于其正常位置进行定位。| 因此，"left:20px" 会向元素的 left 位置添加 20 像素。
absolute 生成绝对定位的元素，相对于已定位的父元素进行定位。| 元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。
fixed 生成固定定位的元素，相对于浏览器窗口进行定位。| 元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。
---table---
`
style.float = `
title float 浮动
# float 设置元素是否浮动
---code---
float: left | right;
---code---
# 可能值描述
---table---
值 描述
left  元素向左浮动。
right 元素向右浮动。
none  默认值。元素不浮动，并会显示在其在文本中出现的位置。
---table---
# 清除浮动的几种方法：
---code---
//给浮动元素下一个兄弟元素 clear 属性
.next{
	clear: both;
}
//清除浮动引起没有撑起容器高度问题
.ctr:after{
	content: '';
	display: table;
	clear: both;
}
---code---
`
style.cursor = `
title cursor 光标类型
# 显示光标类型值描述
---table---
值 描述
url   需使用的自定义光标的 URL。| 注释：请在此列表的末端始终定义一种普通的光标，以防没有由 URL 定义的可用光标。
default   默认光标（通常是一个箭头）
auto      默认。浏览器设置的光标。
crosshair 光标呈现为十字线。
pointer   光标呈现为指示链接的指针（一只手）
move      此光标指示某对象可被移动。
e-resize  此光标指示矩形框的边缘可被向右（东）移动。
ne-resize 此光标指示矩形框的边缘可被向上及向右移动（北/东）。
nw-resize 此光标指示矩形框的边缘可被向上及向左移动（北/西）。
n-resize  此光标指示矩形框的边缘可被向上（北）移动。
se-resize 此光标指示矩形框的边缘可被向下及向右移动（南/东）。
sw-resize 此光标指示矩形框的边缘可被向下及向左移动（南/西）。
s-resize  此光标指示矩形框的边缘可被向下移动（南）。
w-resize  此光标指示矩形框的边缘可被向左移动（西）。
text      此光标指示文本。
wait      此光标指示程序正忙（通常是一只表或沙漏）。
help      此光标指示可用的帮助（通常是一个问号或一个气球）。
---table---
`
style.overflow = `
# overflow 属性规定当内容溢出元素框时发生的事情
---code---
overflow: visible | hidden | scroll | auto;
---code---
# 可能值描述
---table---
值 描述
visible 默认值。内容不会被修剪，会呈现在元素框之外。
hidden  内容会被修剪，并且其余内容是不可见的。
scroll  内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。
auto    如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。
---table---
-----
注释：
	如果值为 scroll，不论是否需要，用户代理都会提供一种滚动机制。因此，有可能即使元素框中可以放下所有内容也会出现滚动条
-----
`
style.userSelect = `
title user-select 可否选择文本
# user-select 设置用户是否可以选择文本
---code---
user-select: text | auto | all | none;
---code---
# 可能值描述
---table---
值 描述
none 不可以选择文本
text 可以选择文本（默认值）
all  当所有内容作为一个整体时可以被选择
auto 选择一个整体
---table---
-----
提示：
	IE6-9不支持该属性，但支持使用标签属性 onselectstart="return false;" 来达到 user-select:none 的效果；Safari和Chrome也支持该标签属性；
	直到Opera12.5仍然不支持该属性，但和IE6-9一样，也支持使用私有的标签属性 unselectable="on" 来达到 user-select:none 的效果；unselectable 的另一个值是 off；
	除Chrome和Safari外，在其它浏览器中，如果将文本设置为 -ms-user-select:none;，则用户将无法在该文本块中开始选择文本。不过，如果用户在页面的其他区域开始选择文本，则用户仍然可以继续选择将文本设置为 -ms-user-select:none; 的区域文本；
	对应的脚本特性为userSelect。
-------
`
style.opacity = `
title opacity 透明度
# opacity 设置元素节点的透明度
---code---
opacity: (0 - 1);
---code---
-----
	值为 0 到 1 之间
	0 完全透明，1 不透明(默认为1)
-----
`
style.visibility = `
# visibility 属性规定元素是否可见
---code---
visibility: visible | hidden | collapse;
---code---
# 可能值描述
---table---
值  描述
visible  默认值。元素是可见的。
hidden   元素是不可见的。
collapse 当在表格元素中使用时，此值可删除一行或一列，但是它不会影响表格的布局。被行或列占据的空间会留给其他内容使用。如果此值被用在其他的元素上，会呈现为 "hidden"。
---table---
-------
提示：
	即使不可见的元素也会占据页面上的空间。请使用 "display" 属性来创建不占据页面空间的不可见元素。
-------
`
style.verticalAlign = `
title vertical-align 垂直对齐
# vertical-align 属性设置元素的垂直对齐方式
---code---
vertical-align: baseline | top | middle | bottom;
---code---
# 可能值描述
---table---
值 描述
baseline 默认。元素放置在父元素的基线上。
sub      垂直对齐文本的下标。
super    垂直对齐文本的上标
top      把元素的顶端与行中最高元素的顶端对齐
text-top 把元素的顶端与父元素字体的顶端对齐
middle   把此元素放置在父元素的中部。
bottom   把元素的顶端与行中最低的元素的顶端对齐。
text-bottom 把元素的底端与父元素字体的底端对齐。
%        使用 "line-height" 属性的百分比值来排列此元素。允许使用负值。
---table---
`
style.width_height = `
title 常用样式
# width 宽
---code---
width: 10px | 10rem | 50% | 10em | 10cm;
max-width: 80px; //最大宽度
min-width: 20px; //最小宽度
---code---
# height 高
---code---
height: 10px | 10rem | 50% | 10em | 10cm;
max-height: 80px; //最大高度
min-height: 20px; //最小高度
---code---
`
