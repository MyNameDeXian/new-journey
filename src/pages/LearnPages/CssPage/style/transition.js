export const transition = {}

transition.transition = `
title transition 简写
# transition 属性是一个简写属性，用于设置四个过渡属性
---code---
transition: property duration timingFunction delay;
---code---
# 可能值描述
---table---
33%
值  描述
transition-property 	规定设置过渡效果的 CSS 属性的名称。
transition-duration 	规定完成过渡效果需要多少秒或毫秒。
transition-timing-function 规定速度效果的速度曲线。
transition-delay 	定义过渡效果何时开始。
---table---
# 示例：
---code---
transition: width 2s linear;
---code---
`
transition.property = `
title 过渡名称
# transition-property 属性规定应用过渡效果的 CSS 属性的名称
---code---
transition-property: none | all | property;
---code---
# 可能值描述
---table---
值  描述
none 		没有属性会获得过渡效果。
all 		所有属性都将获得过渡效果。
property 定义应用过渡效果的 CSS 属性名称列表，列表以逗号分隔。
---table---
`
transition.duration =`
title 过渡所需时间
# transition-duration 属性规定完成过渡效果需要花费的时间
---code---
transition-duration: time;
---code---
# 可能值描述
---table---
值 描述
time 规定完成过渡效果需要花费的时间（以秒或毫秒计）。|默认值是 0，意味着不会有效果。
---table---
`
transition.timingFunction = `
title 过渡速度曲线
# transition-timing-function 属性规定过渡效果的速度曲线
---code---
transition-timing-function: linear | ease | cubic-bezier(n,n,n,n);
---code---
# 可能值描述
---table---
26%
值 描述
linear 	规定以相同速度开始至结束的过渡效果。
ease 		规定慢速开始，然后变快，然后慢速结束的过渡效果。
ease-in 	规定以慢速开始的过渡效果。
ease-out 	规定以慢速结束的过渡效果。
ease-in-out 规定以慢速开始和结束的过渡效果。
cubic-bezier(n,n,n,n) 在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值。
---table---
`
transition.delay = `
title 动画开始时间
# transition-delay 属性规定过渡效果何时开始
---code---
transition-delay: time;
---code---
# 可能值描述
---table---
值 描述
time 规定在过渡效果开始之前需要等待的时间，以秒或毫秒计。
---table---
`