export const str = {};

str.replace =`
# replace 字符串替换函数
---code---
str.replace(regexp/substr,replacement)
---code---
regexp/substr 必需。规定子字符串或要替换的模式的 RegExp 对象。
replacement 必需。一个字符串值。规定了替换文本或生成替换文本的函数。
# replace 来替换字符串中的字符
---code---
let str = 'hello word'
str.replace('word', 'miki') // 'hello miki'
---code---
`