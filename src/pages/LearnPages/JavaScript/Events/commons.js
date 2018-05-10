export const commons = {};
commons.event = `
title Event 几个常用属性
# Event 几个常用属性
---code---
// 返回触发事件的节点对象
let el = event.target 

// 阻止默认事件，比如 a 标签的跳转
event.preventDefault()


---code---
`
commons.addEventListener =`
# addEventListener 绑定事件:
---code---
dom.addEventListener(event, function, useCapture);
---code---
# addEventListener 参数说明：
event 事件名 字符串类型
	注意: 不要使用 "on" 前缀。例如,使用 "click" ,而不是使用 "onclick"。
function 触发事件执行的函数
useCapture 可选。布尔值，指定事件是否在捕获或冒泡阶段执行
	true - 事件句柄在捕获阶段执行
	false - 默认值。事件句柄在冒泡阶段执行 
# addEventListener 一个事件可以绑定多个执行函数, 例绑定 'click'：
---code---
dom.addEventListener('click', function(e){
	console.log(1);
});
dom.addEventListener('click', function(e){
	console.log(2);
});
// 点击 dom 时会输出 1 和 2
---code---
`
commons.removeEventListener =`
# removeEventListener 解绑事件
---code---
dom.removeEventListener(event, eventFunction)
---code---
# removeEventListener 参数说明：
event 要解绑的事件名称
eventFunction 指定要解绑的函数句柄
# 示例:
---code---
// 事件函数
function fn(e){ console.log(e)}
// 绑定事件
dom.addEventListener('click', fn) 
// 解绑事件
dom.removeEventListener('click, fn)
---code---
# 没有记录事件函数句柄，是没有办法解绑事件，例：
---code---
// 下面面两种绑定方式没有记录绑定函数句柄，所以没有办法去解绑绑定事件
dom.addEventListener('click', function(e){
	console.log(1)
})
dom.onclick = function(e){ console.log(2) }
// 点击 dom 时还是会输出 1 和 2
---code---
`
/*
onanimationend
onanimationiteration
onanimationstart
onsearch
ontransitionend
onwebkitanimationend
onwebkitanimationiteration
onwebkitanimationstart
onwebkittransitionend
onabort
onblur
oncancel
oncanplay
oncanplaythrough
onchange
onclick
onclose
oncontextmenu
oncuechange
ondblclick
ondrag
ondragend
ondragenter
ondragleave
ondragover
ondragstart
ondrop
ondurationchange
onemptied
onended
onerror
onfocus
oninput
oninvalid
onkeydown
onkeypress
onkeyup
onload
onloadeddata
onloadedmetadata
onloadstart
onmousedown
onmouseenter
onmouseleave
onmousemove
onmouseout
onmouseover
onmouseup
onmousewheel
onpause
onplay
onplaying
onprogress
onratechange
onreset
onresize
onscroll
onseeked
onseeking
onselect
onstalled
onsubmit
onsuspend
ontimeupdate
ontoggle
onvolumechange
onwaiting
onwheel
onauxclick
ongotpointercapture
onlostpointercapture
onpointerdown
onpointermove
onpointerup
onpointercancel
onpointerover
onpointerout
onpointerenter
onpointerleave
onafterprint
onbeforeprint
onbeforeunload
onhashchange
onlanguagechange
onmessage
onmessageerror
onoffline
ononline
onpagehide
onpageshow
onpopstate
onrejectionhandled
onstorage
onunhandledrejection
onunload
*/