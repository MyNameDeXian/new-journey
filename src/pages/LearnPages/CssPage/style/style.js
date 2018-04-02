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
# 元素生成的框的类型值描述
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

`
style.float = `

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

`
style.visibility = `

`
style.verticalAlign = `
title vertical-align
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