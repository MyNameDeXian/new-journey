export const fonts = {}

fonts.font = `
title 字体样式简写
# font 样式简写，可以按顺序设置如下属性：
---code---
//     字体风格   字体异体     字体粗细    字体尺寸 / 行高       字体系列
font: font-style font-variant font-weight font-size/line-height font-family;
.font{
	font:italic bold 12px/20px arial,sans-serif;
}
---code---
可以不设置其中的某个值, 未设置的属性会使用其默认值, 如下:
---code---
.font{
	font: 100% verdana;
}
---code---
`
fonts.fontStyle = `
title font-style
# font-style 设置字体的风格
---code---
font-style: normal | italic | oblique;
---code---
# 可能值描述
---table---
值 描述
normal  默认值。浏览器显示一个标准的字体样式
italic  浏览器会显示一个斜体的字体样式
oblique 浏览器会显示一个倾斜的字体样式
---table---
`
fonts.fontVariant = `
title font-variant
# font-variant 设置字体异体
---code---
font-variant: normal | small-caps;
---code---
# 可能值描述
---table---
值 描述
normal      默认值。浏览器会显示一个标准的字体
small-caps  浏览器会显示小型大写字母的字体
---table---
`
fonts.fontWeight = `
title font-weight
# font-weight 设置字体粗细
---code---
font-weight: normal | bold | bolder | 100 - 900;
---code---
# 可能值描述
---table---
normal	默认值。定义标准的字符。
bold	定义粗体字符。
bolder	定义更粗的字符。
lighter	定义更细的字符。
100 	
200 	
300 	
400 等同于 normal
500 	
600 	
700 等同于 bold
800 	
900 	
---table---
`
fonts.fontSize = `
title font-size
# font-size	设置字体尺寸
---code---
font-size: 10px | .5em | .5rem | 50%;
---code---
# 单位使用姿势
---table---
15%
单位 描述
px 固定单位
em 根据父元素尺寸计算，例父元素 font-size:20px 则 0.5em = 0.5 * 20 = 10px
rem 根据根元素尺寸计算，例根元素 font-size:20px 则 0.5rem = 0.5 * 20 = 10px
% 基于父元素的一个百分比值
---table---
# 可能值描述
---table---
15%
值 描述
xx-small 把字体的尺寸设置为不同的尺寸，从 xx-small 到 xx-large
x-small 	
small 	
medium 默认值：medium
large 	
x-large 	
xx-large 	
smaller 把 font-size 设置为比父元素更小的尺寸。
larger  把 font-size 设置为比父元素更大的尺寸
---table---
`
fonts.lineHeight = `
title line-height
# line-height 设置行高
---code---
line-height: 2 | 10px | .5em | .5rem | 50%;
---code---
# 可能值与单位描述
---table---
15%
单位/值 描述
normal 默认。设置合理的行间距。
number 设置数字，此数字会与当前的字体尺寸相乘来设置行间距
px 固定单位
em 根据父元素尺寸计算，例父元素 font-size:20px 则 0.5em = 0.5 * 20 = 10px
rem 根据根元素尺寸计算，例根元素 font-size:20px 则 0.5rem = 0.5 * 20 = 10px
% 基于父元素的一个百分比值
---table---
`
fonts.fontFamily = `
title font-family
# font-family 设置使用什么字体
---code---
font-family:"Times New Roman",Georgia,Serif;
---code---
# 说明：
----
font-family 规定元素的字体系列。
font-family 可以把多个字体名称作为一个“回退”系统来保存。如果浏览器不支持第一个字体，则会尝试下一个。也就是说，font-family 属性的值是用于某个元素的字体族名称或/及类族名称的一个优先表。浏览器会使用它可识别的第一个值。
有两种类型的字体系列名称：
	指定的系列名称：具体字体的名称，比如："times"、"courier"、"arial"。
	通常字体系列名称：比如："serif"、"sans-serif"、"cursive"、"fantasy"、"monospace"
提示：使用逗号分割每个值，并始终提供一个类族名称作为最后的选择。
注意：使用某种特定的字体系列（Geneva）完全取决于用户机器上该字体系列是否可用；这个属性没有指示任何字体下载。因此，强烈推荐使用一个通用字体系列名作为后路
----
`
fonts.color = `
# color 设置字体颜色
---code---
color: #5f5f5f;
---code---
`
fonts.fontFace = `
title @font-face
# @font-face 引用需要的字体
------
在新的 @font-face 规则中，您必须首先定义字体的名称（比如 myFirstFont），然后指向该字体文件
如需为 HTML 元素使用字体，请通过 font-family 属性来引用字体的名称 (myFirstFont)：
------
# 示例：
---code---
<style>
	@font-face{
		font-family: myFirstFont;
		src: url('Sansation_Light.ttf'),
     	  url('Sansation_Light.eot'); // IE9+
	}
	div{
		font-family: myFirstFont;
	}
</style>
---code---
`