export const regAttr = {}

regAttr.common = `
title 常用的正则表达式
---table---
名称     正则表达式
密码账号 /^[A-z0-9_]+$/  字母、数组、下划线
汉字     /^[\\u4e00-\\u9fa5]+$/
手机号码 /^1[34578]\d{9}$/
---table---
`
regAttr.modifiers = `
title 修饰符
# 修饰符描述
---table---
修饰符 描述
i 执行对大小写不敏感的匹配
g 执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）
m 执行多行匹配
---table---
`
regAttr.square =`
title 方括号
# 方括号的使用姿势
---table---
表达式 描述
[abc] 查找方括号之间的任何字符
[^abc] 查找任何不在方括号之间的字符
[0-9] 查找任何从 0 至 9 的数字
[a-z] 查找任何从小写 a 到小写 z 的字符
[A-Z] 查找任何从大写 A 到大写 Z 的字符
[A-z] 相当于查找[a-z][A-Z]的集合
[^abc]* 表示查找除了方括号内的任意字符
(red|blue|green) 查找任何指定的选项
---table---
`
regAttr.big =`
title 大括号
# 大括号使用姿势
---table---
/\d{2,}/  表示匹配至少 2 个连续数字
/\d{1,2}/ 表示匹配至少 1 个、最多 2 个连续数字
/\d{2}/   表示匹配 2 个连续数字
---table---
`
regAttr.metacharacters = `
title 元字符
# 元字符描述姿势
---table---
元字符 描述
. 查找单个字符，除了换行和行结束符
\\w 查找单词字符
\\W 查找非单词字符
\\d 查找数字
\\D 查找非数字字符
\\s 查找空白字符
\\S 查找非空白字符
\\b 匹配单词边界
\\B 匹配非单词边界
\\0 查找 NUL 字符
\\n 查找换行符
\\f 查找换页符
\\r 查找回车符
\\t 查找制表符
\\v 查找垂直制表符
\\xxx 查找以八进制数 xxx 规定的字符
\\xdd 查找以十六进制数 dd 规定的字符
\\uxxxx 查找以十六进制数 xxxx 规定的 Unicode 字符
---table---
`
regAttr.quantifiers =`
title 量词
# 量词使用姿势
---table---
量词 描述
n+   匹配任何包含至少一个 n 的字符串
n*   匹配任何包含零个或多个 n 的字符串
n?   匹配任何包含零个或一个 n 的字符串
n{X} 匹配包含 X 个 n 的序列的字符串
n{X,Y} 匹配包含 X 至 Y 个 n 的序列的字符串
n{X,}  匹配包含至少 X 个 n 的序列的字符串
n$   匹配任何结尾为 n 的字符串
^n   匹配任何开头为 n 的字符串
?=n  匹配任何其后紧接指定字符串 n 的字符串
?!n  匹配任何其后没有紧接指定字符串 n 的字符串
---table---
`
regAttr.exec = `
title exec 方法
# exec() 方法用于检索字符串中的正则表达式的匹配
----
exec 方法返回一个数组，如果未找到匹配，则返回值为 null
-------
---code---
Reg.exec(string)
---code---
---table---
参数 描述
string 必需。要检索的字符串
---table---
# 说明：
--------------
exec() 方法的功能非常强大，它是一个通用的方法，而且使用起来也比 test() 方法以及支持正则表达式的 String 对象的方法更为复杂。
如果 exec() 找到了匹配的文本，则返回一个结果数组。否则，返回 null。此数组的第 0 个元素是与正则表达式相匹配的文本，第 1 个元素是与 RegExpObject 的第 1 个子表达式相匹配的文本（如果有的话），第 2 个元素是与 RegExpObject 的第 2 个子表达式相匹配的文本（如果有的话），以此类推。除了数组元素和 length 属性之外，exec() 方法还返回两个属性。index 属性声明的是匹配文本的第一个字符的位置。input 属性则存放的是被检索的字符串 string。我们可以看得出，在调用非全局的 RegExp 对象的 exec() 方法时，返回的数组与调用方法 String.match() 返回的数组是相同的。
但是，当 RegExpObject 是一个全局正则表达式时，exec() 的行为就稍微复杂一些。它会在 RegExpObject 的 lastIndex 属性指定的字符处开始检索字符串 string。当 exec() 找到了与表达式相匹配的文本时，在匹配后，它将把 RegExpObject 的 lastIndex 属性设置为匹配文本的最后一个字符的下一个位置。这就是说，您可以通过反复调用 exec() 方法来遍历字符串中的所有匹配文本。当 exec() 再也找不到匹配的文本时，它将返回 null，并把 lastIndex 属性重置为 0。
---------
# 提示和注释
---------
重要事项：如果在一个字符串中完成了一次模式匹配之后要开始检索新的字符串，就必须手动地把 lastIndex 属性重置为 0。
提示：请注意，无论 RegExpObject 是否是全局模式，exec() 都会把完整的细节添加到它返回的数组中。这就是 exec() 与 String.match() 的不同之处，后者在全局模式下返回的信息要少得多。因此我们可以这么说，在循环中反复地调用 exec() 方法是唯一一种获得全局模式的完整模式匹配信息的方法。
--------------
`
regAttr.test = `

`