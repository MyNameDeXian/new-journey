export const bg = {}

bg.background = `
title background 简写
# background 简写属性在一个声明中设置所有的背景属性
不需要按顺序写
---code---
//            颜色   背景图   位置 / 尺寸   是否重复 
background: color image position / size repeat origin clip attachment
background: #fff url('./imgUrl') top center / 50% 50% no-repeat fixed;
---code---
# 可能值描述
---table---
31%
值 描述
background-color     规定要使用的背景颜色 	css1
background-image     规定要使用的背景图像		css1
background-position  规定背景图像的位置		css1
background-size      规定背景图片的尺寸		css3
background-repeat    规定如何重复背景图像		css1
background-origin    规定背景图片的定位区域	css3
background-clip      规定背景的绘制区域		css3
background-attachment  规定背景图像是否固定或者随着页面的其余部分滚动		css1
---table---
`
bg.color = `
title background-color
# background-color 背景颜色的几种写法
---code---
background-color: red;     //直接写颜色名称
background-color: #FFFFFF; //十六进制写法
background-color: rgb(255,255,255) //rgb背景颜色
background-color: rgba(255,255,255,.8) //第四位小数代表透明度值(0-1)
---code---
`
bg.image = `
title background-image
# background-image 背景图片
---code---
background-image: url('./image.png'); 
---code---
`
bg.position =`
title background-position
# background-position 设置背景图像的起始位置
---code---
//以关键词设置, 默认值：0% 0%
background-position: top left;
//如果您仅规定了一个关键词，那么第二个值将是"center"
background-position: top; => background-position: top center;

//以百分比设置，x水平位置，y垂直位置
background-position: x% y%; 	
//如果您仅规定了一个值，另一个值将是 50%
background-position: 20%; => background-position: 20% 50%;

//以单位设置
background-position: 5px 5px | .5em .5em | .5rem .5rem;
//如果您仅规定了一个值，另一个值将是50%
background-position: 10px; => background-position: 10px 50%;
//可以和 % 混用
background-position: 5px 20% | 20% 5px;
---code---
`
bg.size = `
title background-size
# background-size 设置背景图大小
---code---
background-size: 5px 5px | 50% 50% | cover | contain;
---code---
# 可能值描述
---table---
值 描述
px 设置背景图的固定宽高 | 如果只设置一个值，则第二个值会被设置为 "auto"
em 根据父元素计算背景图宽高 | 如果只设置一个值，则第二个值会被设置为 "auto"
rem 根据根元素计算背景图宽高 | 如果只设置一个值，则第二个值会被设置为 "auto"
% 以父元素的百分比来设置背景图像的宽度和高度 | 如果只设置一个值，则第二个值会被设置为 "auto"
cover	把背景图像扩展至足够大，以使背景图像完全覆盖背景区域 | 背景图像的某些部分也许无法显示在背景定位区域中。
contain 把图像图像扩展至最大尺寸，以使其宽度和高度完全适应内容区域。
---table---
`
bg.repeat = `
title background-repeat
---code---
background-repeat: repeat | no-repeat | repeat-x | repeat-y;
---code---
# 可能值描述
---table---
值 描述
repeat    默认。背景图像将在垂直方向和水平方向重复
repeat-x  背景图像将在水平方向重复
repeat-y  背景图像将在垂直方向重复
no-repeat 背景图像将仅显示一次
---table---
`
bg.attachment = `
title background-attachment
# background-attachment 设置背景图像是否固定或者随着页面的其余部分滚动
---code---
background-attachment: scroll | fixed;
---code---
# 可能值描述
---table---
值 描述
scroll 默认值。背景图像会随着页面其余部分的滚动而移动。
fixed  当页面的其余部分滚动时，背景图像不会移动。
---table---
`
bg.origin = `
title background-origin
# background-origin 设置背景图片的定位区域
---code---
background-origin: padding-box | border-box | border-box;
---code---
-------
注意：如果背景图像的 background-attachment 属性为 "fixed"，则该属性没有效果。
-------
# 可能值描述
---table---
值 描述
padding-box 默认。背景图像相对于内边距框来定位。
border-box  背景图像相对于边框盒来定位。
content-box 背景图像相对于内容框来定位。
---table---
`
bg.clip = `
title background-clip
# background-clip 设置背景绘制区域
---code---
background-clip: border-box|padding-box|content-box;
---code---
# 可能值描述
---table---
值 描述
border-box  默认值。背景被裁剪到边框盒。
padding-box 背景被裁剪到内边距框。
content-box 背景被裁剪到内容框。
---table---
`
