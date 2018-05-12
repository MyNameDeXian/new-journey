export const node = {}

node.previousElementSibling = `
title previousElementSibling
# previousElementSibling 获取上一个兄弟元素节点
---code---
// 获取 dom 节点的上一个元素节点
dom.previousElementSibling
// 获取上一个兄弟节点(包括文本节点)
dom.previousSibling; 
-----
`
node.nextElementSibling = `
title nextElementSibling
# nextElementSibling 获取下一个兄弟元素节点
---code---
// 获取 dom 节点的下一个兄弟元素节点
dom.nextElementSibling
// 获取下一个兄弟节点(包括文本节点)
dom.nextSibling; 
---code---
`
node.parentNode = `
title parentNode 获取父节点
# parentNode 获取父节点
---code---
dom.parentNode
---code---
`
node.ElementChild = `
title 获取子节点
# children 获取所有的子节点，返回类数组
---code---
let childrens = parentNode.children;
// 转化成数组， 可以调用数组API
childrens = Array.prototype.slice.call(childrens);
---code---
# firstElementChild 获取第一个元素子节点
---code---
parentNode.firstElementChild;
---code---
# lastElementChild 获取最后一个元素子节点
---code---
parentNode.lastElementChild;
---code---
# childElementCount 返回元素子节点总数
---code---
parentNode.childElementCount
---code---
`
node.insertBefore = `
title insertBefore 插入、移动节点
# insertBefore 插入/移动已有元素
---code---
// 把 newDom 节点移动到 existingDom 节点前面
let parentNode = existingDom.parentNode;
parentNode.insertBefore(newDom, existingDom);
---code---
---table---
参数 描述
newDom 要插入 或 移动的节点
existingDom 当前节点，插入 或 移动到当前节点的前面
---table---
`
node.setChild = `
title 增、删、替换节点
# appendChild 插入 或 移动已有节点
---code---
parentNode.appendChild(node);
---code---
# removeChild 删除子节点
---code---
let parentNode = dom.parentNode;
parentNode.removeChild(dom);
---code---
# replaceChild 替换节点
---code---
// 把 newDom 节点替换 oldDom 节点
let parentNode = oldDom.parentNode;
parentNode.replaceChild(newDom, oldDom);
---code---
# remove 删除节点，新 dom API 存在兼容性问题
---code---
dom.remove();
---code---
`
node.offset = `
title offset 节点坐标、宽高
# 获取节点坐标 与 宽高
---code---
// 返回节点离文档顶部距离
dom.offsetTop 
// 返回节点离文档左边距离
dom.offsetLeft

// 获取节点宽度
dom.offsetWidth 
// 获取节点高度
dom.offsetHeight 
---code---
`
