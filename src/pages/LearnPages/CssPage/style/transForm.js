export const transform = {}

transform.transform = `
title transform 转换
# transform 设置元素 2D 或 3D 转换
---code---
transform: none | transform-function;
---code---
`
transform.translate = `
title 位移转换
# 位移 translate
---code---
transform: translate(20px, 20px);
transform: translate3d(20px, 20px, 20px);
---code---
# 可能值描述
---table---
值 描述
translate(x,y) 	 定义 2D 转换。
translate3d(x,y,z) 定义 3D 转换。	
translateX(x) 		 定义转换，只是用 X 轴的值。
translateY(y) 		 定义转换，只是用 Y 轴的值。
translateZ(z) 		 定义 3D 转换，只是用 Z 轴的值。
---table---
`
transform.scale = `
title 缩放转换
# 缩放 scale
---code---
transform: scale(1.2, 2);
transform: scale3d(1.2, 2, 3);
---code---
# 可能值描述
---table---
值 描述
scale(x,y) 		定义 2D 缩放转换。
scale3d(x,y,z) 定义 3D 缩放转换。	
scaleX(x) 		通过设置 X 轴的值来定义缩放转换。
scaleY(y) 		通过设置 Y 轴的值来定义缩放转换。
scaleZ(z) 		通过设置 Z 轴的值来定义 3D 缩放转换。
---table---
`
transform.rotate = `
title 旋转转换
# 旋转 rotate
---code---
transform: rotate(60deg);
---code---
# 可能值描述
---table---
26%
值 描述
rotate(angle) 	定义 2D 旋转，在参数中规定角度。
rotate3d(x,y,z,angle) 定义 3D 旋转。	
rotateX(angle) 定义沿着 X 轴的 3D 旋转。
rotateY(angle) 定义沿着 Y 轴的 3D 旋转。
rotateZ(angle) 定义沿着 Z 轴的 3D 旋转。
---table---
`
transform.skew = `
title 倾斜转换
# 倾斜 skew
---code---
transform: skew(20px, 20px);
transform: skewX(30deg);
---code---
# 可能值描述
---table---
28%
值 描述
skew(x-angle,y-angle) 定义沿着 X 和 Y 轴的 2D 倾斜转换。
skewX(angle) 	定义沿着 X 轴的 2D 倾斜转换。
skewY(angle) 	定义沿着 Y 轴的 2D 倾斜转换。
---table---
`
transform.perspective = `
title 3D透视转换
# 透视 perspective
---table---
值 描述
perspective(n) 为 3D 转换元素定义透视视图。
---table---
`