export const moveDom = {}
moveDom.scrollIntoView = `
# scrollIntoView 使 dom 滚动到可视区域：
---code---
dom.scrollIntoView(alignWithTop) //目前各浏览器均支持
---code---
# alignWithTop 为 Boolean 类型，默认值true:
true  窗口会尽可能滚动到自身顶部与元素顶部平齐。
false 窗口底部与可见区域底部对齐
# 示例：
---code---
//dom 元素滚动到与可见区域顶部对齐
dom.scrollIntoView()
//dom 元素底部与可见区域底部对齐
dom.scrollIntoView(false)
---code---
`
moveDom.scrollIntoViewIfNeeded = `
# scrollIntoViewIfNeeded 使 dom 滚动到可视区域：
---code---
dom.scrollIntoViewIfNeeded(alignWithTop) 
//非标准特性，请尽量不要在生产环境中使用它！
---code---
# alignWithTop 为 Boolean 类型，默认值true:
true  窗口会尽可能滚动到自身顶部与元素顶部平齐。
false 窗口底部与可见区域底部对齐
# 示例：
---code---
// dom 滚动到与可见区域顶部对齐
dom.scrollIntoViewIfNeeded()
// dom 滚动到可见区域中间
dom.scrollIntoViewIfNeeded(false)
---code---
`