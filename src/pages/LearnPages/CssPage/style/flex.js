export const flex = {}

flex.flex = `
title flex 容器
# 任何一个容器都可以指定为 Flex 布局
---code---
.box{
	display: flex;
}
---code---
-----
注意：设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效。
-----
# 容器的属性
---table---
属性 描述
flex-direction  属性决定主轴的方向（即项目的排列方向）。
flex-wrap       属性定义项目如果一条轴线排不下，项目如何换行。
flex-flow       属性是flex-direction属性和flex-wrap属性的简写形式
justify-content 属性定义了项目在主轴上的对齐方式。
align-items     属性定义项目在交叉轴上如何对齐。
align-content   属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
---table---
`
flex.direction = `
title flex-direction 主轴方向
# flex-direction 属性定义主轴的方向
---code---
flex-direction: row | column | row-reverse | column-reverse;
---code---
# 可能值描述
---table---
值 描述
row 	 			默认值。主轴为水平方向，起点在左端。
column 			主轴为垂直方向，起点在上沿。
row-reverse 	主轴为水平方向，起点在右端。
column-reverse 主轴为垂直方向，起点在下沿。
---table---
`
flex.wrap = `
title flex-wrap 如何换行
# flex-wrap 定义项目如何换行
---code---
flex-wrap: nowrap | wrap | wrap-reverse;
---code---
# 可能值描述
---table---
值 描述
nowrap 默认值。不换行
wrap   换行，第一行在上方
wrap-reverse 换行，第一行在下方。
---table---
`
flex.flow = `
title flex-flow 主轴与换行简写
# flex-flow 属性是 flex-direction 属性和 flex-wrap 属性的简写形式
---code---
flex-flow: flex-direction flex-wrap;
flex-flow: row nowrap; //默认值
---code---
`
flex.justifyContent = `
title justify-content 主轴对齐
# justify-content 属性定义了项目在主轴上的对齐方式
---code---
justify-content: flex-end | center | space-between | space-around;
---code---
# 可能值描述
---table---
值 描述
flex-start 	默认值。左对齐
flex-end 	右对齐
center 		居中
space-between 	两端对齐，项目之间的间隔都相等。
space-around 	每个项目两侧的间隔相等。项目之间的间隔比项目与边框的间隔大一倍。
---table---
`
flex.alignItems = `
title align-items 交叉轴对齐
# align-items 属性定义项目在交叉轴上如何对齐
---code---
align-items: flex-start | flex-end | center | baseline | stretch;
---code---
# 可能值描述
---table---
值 描述
flex-start 	交叉轴的起点对齐。
flex-end 	交叉轴的终点对齐。
center 		交叉轴的中点对齐。
baseline: 	项目的第一行文字的基线对齐。
stretch 		默认值。如果项目未设置高度或设为auto，将占满整个容器的高度。
---table---
`
flex.alignContent = `
title align-content 多轴对齐
# align-content 属性定义了多根轴线的对齐方式。
---code---
align-content: flex-end | center | space-between | space-around | stretch;
---code---
# 可能值描述
---table---
值 描述
flex-start 	与交叉轴的起点对齐。
flex-end 	与交叉轴的终点对齐。
center 		与交叉轴的中点对齐。
space-between 	与交叉轴两端对齐，轴线之间的间隔平均分布。
space-around 	每根轴线两侧的间隔都相等。轴线之间的间隔比轴线与边框的间隔大一倍。
stretch 			默认值。轴线占满整个交叉轴。
---table---
`
flex.flexItem = `
title flex 项目属性简写
# flex 属性是flex-grow, flex-shrink 和 flex-basis的简写,
---code---
flex: none | flex-grow flex-shrink flex-basis;
flex: 0 1 auto; //默认值
---code---
# 可能值描述
---table---
值 描述
flex-grow   属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
flex-shrink 属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
flex-basis  属性定义了在分配多余空间之前，项目占据的主轴空间。
---table---
`
flex.grow= `
title flex-grow 放大比例
# flex-grow 属性定义项目的放大比例
---code---
flex-grow: number;
---code---
-------
注释:
	如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。
-------
`
flex.shrink = `
title flex-shrink 缩小比例
# flex-shrink 属性定义了项目的缩小比例
---code---
flex-shrink: number;
---code---
------------
注释：
	如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。
------------
` 
flex.basis = `
title flex-basis 空间分配
# flex-basis 属性定义了项目占据的主轴空间
---code---
flex-basis: length | auto;
---code---
# 可能值描述
---table---
值 描述
auto 默认值。项目本来占据的大小
length 可以使用 px、%、rem 等单位定义。
---table---
`
