export const moveDom = {}

moveDom.scrollIntoView = `
title scrollIntoView 返回顶部
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
