export const animation = {}

animation.animation = `
title animation 简写
# animation 动画属性简写
---code---
// 动画名称 动画时间 运动曲线 延迟 播放数次 是否轮流反向播放
animation: name duration timing-function delay iteration-count direction;
---code---
# 可能值描述
---table---
33%
值 描述
animation-name 规定要绑定的选择器的 keyframe 名称。
animation-duration 规定动画运行完成所花费的时间，以秒(s)或以毫秒计。
animation-timing-function	规定动画的速度曲线。
animation-delay	规定在动画开始之前的延迟。
animation-iteration-count	规定动画应该播放的次数。
animation-direction	规定是否应该轮流反向播放动画。
---table---
`
animation.keyframes = `
title @keyframes
# @keyframes 语法
---code---
@keyframes animation-name{
	keyframes-selector{
		css-style
	}
}
@keyframes bigger{
	0%{
		width: 10%;
	}
	100%{
		width: 100%;
	}
}
---code---
# 参数说明
---table---
值 描述
animationname 必需。定义动画的名称。
keyframes-selector 必需。动画时长的百分比。| 合法的值：| 0-100% | from（与 0% 相同）| to（与 100% 相同）
---table---
`
animation.name = `
title 动画名称
# animation-name 属性为 @keyframes 动画规定名称
---code---
animation-name: keyframename | none;
---code---
# 可能值描述
---table---
值 描述
keyframename 规定需要绑定到选择器的 keyframe 的名称。
none 规定无动画效果（可用于覆盖来自级联的动画）。
---table---
`
animation.duration = `
title 动画完成时间
# animation-duration 动画完成一个周期所需要的时间
---code---
animation-duration: time;
---code---
# 可能值描述
---table---
值 描述
time 规定完成动画所花费的时间。默认值是 0，意味着没有动画效果。
---table---
`
animation.timing = `
title 动画速度曲线
# animation-timing-function 动画速度曲线
---code---
animation-timing-function: linear | ease | ease-in | ease-out | ease-in-out;
---code---
# 可能值描述
---table---
28%
值 描述
linear 	动画从头到尾的速度是相同的。
ease  	默认。动画以低速开始，然后加快，在结束前变慢。
ease-in 	动画以低速开始。
ease-out 动画以低速结束。
ease-in-out 动画以低速开始和结束。
cubic-bezier(n,n,n,n) 在 cubic-bezier 函数中自己的值。可能的值是从 0 到 1 的数值。
---table---
`
animation.count = `
title 动画播放数次
# animation-iteration-count 属性定义动画的播放次数
---code---
animation-iteration-count: n | infinite;
---code---
# 可能值描述
---table---
值 描述
n 	定义动画播放次数的数值。
infinite 规定动画应该无限次播放。
---table---
`
animation.direction = `
title 是否反向播放动画
# animation-direction 是否轮流反向播放
---code---
animation-direction: normal | alternate;
---code---
# 可能值描述
---table---
值 		描述
normal 	默认值。动画应该正常播放。
alternate 动画应该轮流反向播放。
---table---
`
animation.state = `
title 动画暂停或运行
# animation-play-state 属性规定动画正在运行还是暂停
---code---
animation-play-state: paused | running;
---code---
# 可能值描述
---table---
值 描述
paused 	规定动画已暂停。
running 	规定动画正在播放。
---table---
`
animation.fillMode = `
title animation-fill-mode
# animation-fill-mode 动画运行时间之外的状态
---code---
animation-fill-mode: none | forwards | backwards | both;
---code---
# 可能值描述
---table---
值 描述
none 		 不改变默认行为。
forwards  当动画完成后，保持最后一个属性值（在最后一个关键帧中定义）。
backwards 在 animation-delay 所指定的一段时间内，在动画显示之前，应用开始属性值（在第一个关键帧中定义）。
both		 向前和向后填充模式都被应用。
---table---
`