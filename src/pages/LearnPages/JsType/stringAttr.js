export const stringObj = {}

stringObj.EscapeCharacter = `
title 转义字符
# 特殊字符转义
---code---
\\0	 空字符
\\'	 单引号
\\"	 双引号
\\\\	 反斜杠
\\n	 换行
\\r	 回车
\\v	 垂直制表符
\\t	 水平制表符
\\b	 退格
\\f	 换页
\\uXXXX               unicode码
\\u{X} ... \\u{XXXXXX}	unicode codepoint 
\\xXX	               Latin-1 字符(x小写)
---code---
`
stringObj.length = `
# length 返回字符串长度
---code---
let str = '123'
str.length // 3
---code---
`
stringObj.replace = `
# replace() 替换字符串
用一串字符串替换另一串字符串或与正则表达式匹配的字符串
replace 方法不会改变原来的字符串，返回替换后的字符串
---code---
str.replace(regexp/substr,replacement)
---code---
# 参数说明：
regexp/substr 必需。要替换的字符串或匹配的正则对象
	字符串 - 替换掉检索到的第一字符串
	正则对象 - 具有全局标志g，则替换掉所有匹配的字符串
	         - 否则只会替换匹配到的第一个字符串
replacement	必需。一个字符串值。规定了替换文本或生成替换文本的函数。
# replacement 中的 $ 符具有特定的含义, 如下:
$1、$2、...、$99	与 regexp 中的第 1 到第 99 个子表达式相匹配的文本。
$&	与 regexp 相匹配的子串。
$\`	位于匹配子串左侧的文本。
$'	位于匹配子串右侧的文本。
$$	直接量符号。
# 示例：
---code---
//用字符串作为检索
let str = 'abc abc'
str.replace('bc', 'aa') //返回 'aaa abc'

//用正则匹配作为检索
let str = 'abc abc'
str.replace(/bc/, 'aa') //返回 'aaa abc'
//加全局标志g
str.replace(/bc/g, 'aa') //返回 'aaa aaa'

//调换两个 单词 的位置
let str = "Doe, John";
str.replace(/(\w+)\s*, \s*(\w+)/, "$2 $1") //返回 "John Doe"
//$1代表第一个小括号的内容，$2代表第二个小括号的内容...

//把单引号替换成双引号
let str = '"a", "b"';
str.replace(/"([^"]*)/g, "'$1'"); //返回"‘a’, ‘b’"

//把单词首字母替换成大写
let str = 'aaa bbb ccc'
str.replace(/\\b\\w+\\b/g, function(word){ 
  	return word.slice(0,1).toUpperCase() 
  			+ word.slice(1)
})
//返回 "Aaa Bbb Ccc"
---code---
`
stringObj.indexOf = `
# indexOf() 检索字符串
indexOf 方法可返回某个指定的字符串值在字符串中首次出现的位置
indexOf 方法对大小写敏感
如果要检索的字符串值没有出现，则该方法返回 -1
---code---
str.indexOf(searchvalue,fromindex)
---code---
# 参数说明：
searchvalue	必需。规定需检索的字符串值。
fromindex 可选。开始检索的位置。默认值0，取值范围0 到 str.length - 1
# 示例：
---code---
let str = 'abcde'
str.indexOf('bc') //返回 1
str.indexOf('cd') //返回 2
str.indexOf('d')  //返回 3
str.indexOf('f')  //返回 -1

//从字符串下标1的位置开始找'a', 所以找不到返回 -1
str.indexOf('a', 1) //返回 -1
---code---
`
stringObj.slice = `
# slice() 截取字符串
返回被截取的新字符串
---code---
str.slice(start, end)
---code---
# 参数说明：
start 必须。开始截取的位置(包含)
end 可选。截取结束的位置(不包含)
start & end 为正数，从开头数起 ; 为负数，从末尾倒数
end 若为空，则从start的位置截取到末尾
# 示例：
---code---
let str = 'abcd'
str.slice(0, 1) //返回 'a'
str.slice(1, 3) //返回 'bc'
str.slice(1)    //返回 'bcd'
//截取倒数第二个(包含)到倒数第一个(不包含)
str.slice(-2, -1) //返回 'c'
---code---
`
stringObj.split = `
# split() 把字符串分割为字符串数组
split 方法返回一个由分割出来的字符串组成的数组
String.split() 执行的操作与 Array.join 执行的操作是相反的
如果把空字符串 ("") 用作分隔符，那么 str 中的每个字符之间都会被分割
---code---
str.split(separator,howmany)
---code---
# 参数说明：
separator 必需。字符串或正则表达式，从该参数指定的边界开始分割 str
howmany	可选。指定返回数组长度。不传该参数，默认返回最大长度
# 示例：
---code---
let str = 'abcde'
//以 'c' 为分隔符
str.split('c') //返回 ["ab", "de"]
//以 'bc' 为分割符
str.split('bc') //返回 ['a', 'de']
//以 'bc' 为分割符, 返回长度为 1 的数组
str.split('bc', 1) //返回 ['a']

//以正则对象分割为分割符
let str = 'abcdbcde'
str.split(/bc/) //返回 ["a", "d", "de"]
---code---
`
stringObj.match = `
# match() 找到与正则表达式的匹配字符
若正则表达式没有具有全局标志g，match只执行一次，
	且返回一个包含匹配字符，匹配字符下标 的数组
若具有全局标志g ，则返回一个所有匹配到的字符串组成的数组
---code---
str.match(searchvalue)
---code---
#参数说明：
searchvalue 必须。字符串 或 正则对象
# 示例：
let str = 'abcbc'
str.match('b') //返回 ["b", index: 1, input: "abcbc"]
str.match(/b/) //返回 ["b", index: 1, input: "abcbc"]
//加全局标志g
str.match(/b/g) //返回 ["b", "b"]
`