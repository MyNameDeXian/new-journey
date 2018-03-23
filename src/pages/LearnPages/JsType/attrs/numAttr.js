export const numAttr = {}

numAttr.type = `
title 不同进制写法
# 二进制 
---code---
0b1010
//0b 后面只能跟 0 和 1
---code---
# 十六进制 
---code---
0x09af
//0x 后面跟 0-9 和 a-f
---code---
# 转换
---code---
let num = 12
//转二进制
num.toString(2) //返回 '1010'

//转十六进制
num.toString(16) //返回 'c'
---code---
`