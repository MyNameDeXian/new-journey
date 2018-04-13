export const border = {}

border.arrow = `
title 箭头写法
# 利用 border 写箭头
---code---
.arrow{
	width: 15px;
	height: 15px;
	border-style: solid;
	border-color: #333;
	border-width: 2PX 2PX 0 0; // 箭头方向向右
	border-width: 2PX 0 0 2px; // 上
	border-width: 0 2PX 2px 0; // 左
	border-width: 0 2PX 0 2px; // 下
	transform: rotate(45deg);
}
---code---
`
border.border = `
title border 简写
# border 简写属性在一个声明设置所有的边框属性
---code---
border: width style color;
border: 5px solid #333;
---code---
# 可能值描述
---table---
值 描述
border-width 规定边框的宽度。
border-style 规定边框的样式。
border-color 规定边框的颜色。
---table---
`
border.width = `
title border-width 边框宽度
# border-width 属性设置四条边框的宽度。此属性可设置 1 到 4 种宽度
---code---
border-width: 1px;             //四边宽度都为 1px
border-width: 1px 2px;         //上下 、 左右
border-width: 1px 2px 3px;     //上 、 左右 、 下
border-width: 1px 2px 3px 4px; //上 、右 、下 、左
---code---
`
border.color = `
title border-color 边框颜色
# border-color 属性设置四条边框的颜色。此属性可设置 1 到 4 种颜色
---code---
border-color: red;                 //四边都是红色
border-color: red green;           //上下 、 左右
border-color: red green blue;      //上 、 左右 、 下
border-color: red green blue pink; //上、右、下、左
---code---
`
border.style = `
title border-style 边框样式
# border-style 属性设置四条边框的样式。此属性可设置 1 到 4 种样式
---code---
border-style: solid;                      //四边都为实线
border-style: solid dotted;               //上下 、 左右
border-style: solid dotted dashed;        //上下 、 左右
border-style: solid dotted dashed double; //上 、右 、下 、左
---code---
# 可能值描述
---table---
16%
值 描述
none 		定义无边框。
hidden 	与 "none" 相同。不过应用于表时除外，对于表，hidden 用于解决边框冲突。
dotted 	定义点状边框。在大多数浏览器中呈现为实线。
dashed 	定义虚线。在大多数浏览器中呈现为实线。
solid 	定义实线。
double 	定义双线。双线的宽度等于 border-width 的值。
groove 	定义 3D 凹槽边框。其效果取决于 border-color 的值。
ridge 	定义 3D 垄状边框。其效果取决于 border-color 的值。
inset 	定义 3D inset 边框。其效果取决于 border-color 的值。
outset 	定义 3D outset 边框。其效果取决于 border-color 的值。
---table---
`
border.radius = `
title border-radius 圆角
# border-radius 边框圆角属性简写，此属性可设置 1 到 4 个圆角值
---code---
border-radius: 5px;               //四个角弧度一样
border-radius: 5px 10px;          //上下 、 左右
border-radius: 5px 10px 8px;      //上 、 左右 、下
border-radius: 5px 10px 15px 8px; //上 、右 、下 、左
---code---
# 设置圆形
---code---
border-radius: 50%;
---code---
------------
注意：若宽高一样则为圆形，若不一样则为椭圆
------------
`
border.shadow = `
title box-shadow 阴影
# box-shadow 属性向框添加一个或多个阴影
---code---
box-shadow: h-shadow v-shadow blur spread color inset;
box-shadow: 5px 5px 3px #888;
---code---
# 可能值描述
---table---
值  描述
h-shadow 必需。水平阴影的位置。允许负值。
v-shadow 必需。垂直阴影的位置。允许负值。
blur	 	可选。模糊距离。
spread 	可选。阴影的尺寸。
color 	可选。阴影的颜色。
inset 	可选。将外部阴影 (outset) 改为内部阴影。
---table---
`
border.outline = `
title outline 轮廓
# outline 在元素的周围绘制一条线
---code---
outline: color style width;
outline: #333 solid 3px;
---code---
# 可能值描述
---table---
值 描述
outline-color  规定轮廓的颜色。
outline-style  规定轮廓的样式。
outline-width  规定轮廓的宽度。
---table---
`
border.outlineColor = `
title outline-color
# outline-color 轮廓颜色
---code---
outline-color: red;
---code---
------------
注意：请始终在 outline-color 属性之前声明 outline-style 属性。元素只有获得轮廓以后才能改变其轮廓的颜色。
注意：轮廓线不会占据空间，也不一定是矩形。
------------
`
border.outlineStyle = `
title outline-style
# outline-style 轮廓的样式
---code---
outline-style: solid | dashed | dotted;
---code---
# 可能值描述
---table---
值 描述
none 		默认。定义无轮廓。
dotted 	定义点状的轮廓。
dashed 	定义虚线轮廓。
solid 	定义实线轮廓。
double 	定义双线轮廓。双线的宽度等同于 outline-width 的值。
groove 	定义 3D 凹槽轮廓。此效果取决于 outline-color 值。
ridge 	定义 3D 凸槽轮廓。此效果取决于 outline-color 值。
inset 	定义 3D 凹边轮廓。此效果取决于 outline-color 值。
outset 	定义 3D 凸边轮廓。此效果取决于 outline-color 值。
---table---
`
border.outlineWidth = `
title outline-width
# outline-width 轮廓宽度
---code---
outline-width: 10px;
---code---
---------
注意：请始终在 outline-width 属性之前声明 outline-style 属性。元素只有获得轮廓以后才能改变其轮廓的颜色。
----------
`
border.image = `
title border-image 简写
# border-image 图片边框的简写
---code---
border-image: url('border.png') 30 30 round;
---code---
# 可能值描述
---table---
27%
值 描述
border-image-source 	用在边框的图片的路径。	
border-image-slice 	图片边框向内偏移。
border-image-width 	图片边框的宽度。	
border-image-outset  边框图像区域超出边框的量。
border-image-repeat 	图像边框是否平铺(repeated)、铺满(rounded)或拉伸(stretched)。
---table---
# border-image-source 图片路径
---code---
border-image-source: url('border.png');
---code---
# border-image-width 图片边框宽度 
---code---
border-image-width: 5;        //四边都为边框的 5 倍
border-image-width: 5 10;     //上下 、 左右
border-image-width: 5 10 8;   //上 、 左右 、 下
border-image-width: 5 10 6 8; //上 、右 、下 、左
---code---
# border-image-repeat 
---code---
border-image-repeat: repeated | rounded | stretched;
---code---
# border-image-slice 内偏移
---code---
border-image-slice: number | % | fill
---code---
# 内偏移的值描述
---table---
值 描述
number 数字值，代表图像中像素（如果是光栅图像）或矢量坐标（如果是矢量图像）。
% 		 相对于图像尺寸的百分比值：图像的宽度影响水平偏移，高度影响垂直偏移。
fill 	 保留边框图像的中间部分。
---table---
# border-image-outset 外偏移
---code---
border-image-outset: 5; // 为border-width 的 5倍
border-image-outset: 10px; 
---code---
`
border.oneBorder = `
title 设置单边框
# border 单边框设置示例
---code---
border-top:    1px solid #333; //上边框简写
border-bottom: 1px solid #333; //下
border-left:   1px solid #333; //左
border-right:  1px solid #333; //右

//设置边框宽度，上下左右类似
border-top-width: 1px; 

//设置边框样式，上下左右类似
border-bottom-style: solid; 

//设置边框颜色，上下左右类似
border-top-color: #333; 
---code---
`
border.oneRadius = `
title 设置单个圆角
# border-radius 设置单个圆角
---code---
border-top-left-radius: 5px;     //左上角
border-top-right-radius: 5px;    //右上角
border-bottom-left-radius: 5px;  //左下角
border-bottom-right-radius: 5px; //右下角
---code---
`

