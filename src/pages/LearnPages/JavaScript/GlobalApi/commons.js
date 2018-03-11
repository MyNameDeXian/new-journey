export const commons = {}

commons.Location = `
# locatoin 保存和设置URL的对象
# 获取 URL 方法：
---code---
	location.href
	location.toString()
	location.toLocaleString()
	document.URL
	//返回 ${location.href}
---code---
# href 设置或返回完整的 URL。
---code---
location.href 
//返回完整的URL "${location.href}"
location.href = URL //设置方法
---code---
# hash 设置或返回从井号 (#) 开始的 URL（锚）。
---code---
location.hash 
//返回 "${location.hash}"
location.hash = "xxx" //设置方法
---code---
# search 设置或返回从问号 (?) 开始的 URL（查询部分）。
---code---
location.search 
//返回 "${location.search}"
location.search = "xxx" //设置方法
---code---
# host 设置或返回主机名和当前 URL 的端口号。
---code---
location.host 
//返回 "${location.host}"
---code---
# hostname 设置或返回当前 URL 的主机名。
---code---
location.hostname 
//返回 "${location.hostname}"
---code---
# pathname 设置或返回当前 URL 的路径部分。
---code---
location.pathname 
//返回 "${location.pathname}"
---code---
# port 设置或返回当前 URL 的端口号。
---code---
location.port 
//返回 "${location.port}"
---code---
# protocol 设置或返回当前 URL 的协议。
---code---
location.protocol 
//返回 "${location.protocol}"
---code---
# assign() 加载新的文档。
---code---
location.assign("http://www.baidu.com");
//相当于在地址栏输入: "http://www.baidu.com"
---code---
# reload() 重新加载当前文档。
---code---
location.reload(force) 
---code---
reload(force) 参数说明
如果该方法没有规定参数，或者参数是 false，
	它就会用 HTTP 头 If-Modified-Since 来检测服务器上的文档是否已改变。
	如果文档已改变，reload() 会再次下载该文档。
	如果文档未改变，则该方法将从缓存中装载文档。
	这与用户单击浏览器的刷新按钮的效果是完全一样的。
如果把该方法的参数设置为 true，
	那么无论文档的最后修改日期是什么，它都会绕过缓存，从服务器上重新下载该文档。
	这与用户在单击浏览器的刷新按钮时按住 Shift 健的效果是完全一样。
# replace() 用新的文档替换当前文档。
---code---
location.replace(newURL)
//新的 URL 将覆盖 History 对象中的URL当前记录。
---code---
`
commons.History = `
# history对象保存着用户上网的历史记录，打开窗口的那一刻算起
# length 返回浏览器历史列表中的 URL 数量。
---code---
history.length //返回URL数量：${history.length}
---code---
# back() 加载 history 列表中的前一个 URL。
---code---
history.back() //相当于 history.go(-1)
//返回前一个页面 
---code---
# forward() 加载 history 列表中的下一个 URL。
---code---
history.forward() //相当于 history.go(1)
//前往下一个页面
---code---
# go() 加载 history 列表中的某个具体页面。
---code---
history.go(number | URL)
---code---
URL 参数使用的是要访问的 URL，或 URL 的子串
number 参数使用的是要访问的 URL 在 History 的 URL 列表中的相对位置
当 number 指向的位置不存在URL的时候，会无效
---code---
history.go() 或 history.go(0) //刷新当前页
// number 为负数时
history.go(-1) //返回前一个页面
history.go(-2) //后退到第二个页面
history.go(-3) //后退到第三个页面
...
// number 为正数时
history.go(1) //前往下一个页面
history.go(2) //前进第二个页面
history.go(3) //前进第三个页面
...
---code---
`
commons.open = `
# window.open() 打开一个新的浏览器窗口或查找一个已命名的窗口
---code---
window.open(URL,name,features,replace)
---code---
`
/*
postMessage
	blur
	focus
	close
	frames
	self
	parent
	opener
	top
	length
	closed
	location
	document
	origin
	name
	history
	locationbar
	menubar
	personalbar
	scrollbars
	statusbar
	toolbar
	status
	frameElement
	navigator
	applicationCache
	customElements
	external
	screen
	innerWidth
	innerHeight
	scrollX
	pageXOffset
	scrollY
	pageYOffset
	screenX
	screenY
	outerWidth
	outerHeight
	devicePixelRatio
	clientInformation
	screenLeft
	screenTop
	defaultStatus
	defaultstatus
	styleMedia
	isSecureContext
	performance
	stop
	alert
	confirm
	prompt
	print
	requestAnimationFrame
	cancelAnimationFrame
	requestIdleCallback
	cancelIdleCallback
	captureEvents
	releaseEvents
	getComputedStyle
	matchMedia
	moveTo
	moveBy
	resizeTo
	resizeBy
	getSelection
	find
	webkitRequestAnimationFrame
	webkitCancelAnimationFrame
	fetch
	btoa
	atob
	setTimeout
	clearTimeout
	setInterval
	clearInterval
	createImageBitmap
	scroll
	scrollTo
	scrollBy
	crypto
	indexedDB
	webkitStorageInfo
	sessionStorage
	localStorage
	visualViewport
	speechSynthesis
	webkitRequestFileSystem
	webkitResolveLocalFileSystemURL
	openDatabase
	chrome
	jWeixin
	wx
	WebTrends
	dcsPageTrack
	dcsTrack
	dcsTrim
	dcsStr
	dcsSubRef
	dcsGetUrlInfo
	dcsReady
	_tag
	s
	flex
	obj
	webpackJsonp
	IntlPolyfill
	__core-js_shared__
	Hammer
	TEMPORARY
	PERSISTENT
	addEventListener
	removeEventListener
	dispatchEvent
	*/