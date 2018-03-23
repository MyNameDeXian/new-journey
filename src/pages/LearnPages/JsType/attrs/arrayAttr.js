export const arrayObj = {}

arrayObj.array = `
title 数组创建
# 创建数组对象的语法，示例： 
---code---
//比较常用的方法
let arr = [1,2,3,...]
//利用Array对象创建, size为数组元素个数
let arr = new Array(size)
//利用Array对象创建，参数为数组元素
let arr = new Array(element0, element1, ..., elementn)
---code---
`
arrayObj.length = `
# length返回数组长度，示例：
---code---
var arr = [0, 1]
console.log(arr.length) // 2
var arr = [0, 1, 2, 3]
console.log(arr.length) // 4
---code---
`
arrayObj.isArray = `
# Array.isArray() 
判断是否是数组，返回Boolean值
# 示例：
---code---
Array.isArray([1, 2, 3])  // true
Array.isArray({foo: 123}) // false
Array.isArray('foobar')   // false
Array.isArray(undefined)  // false
---code---
`
arrayObj.indexOf = `
# indexOf() 获取给定数组元素下标索引
indexOf 方法返回给定数组元素的下标，该元素不存在则返回 -1
---code---
arr.indexOf(searchElement, fromIndex)
---code---
# 参数说明：
searchElement 必须。要搜索的元素
fromIndex 可选。开始查找的位置
	正数从数组开头数起
	负数从数组末尾数起
# 示例：
---code---
let arr = ['a', 'b', 'c']
arr.indexOf('b') //返回 1
arr.indexOf('c') //返回 2
arr.indexOf('D') //返回 -1
//表示从数组下标1的位置开始往后找
arr.indexOf('b', 1) //返回 1
//表示从数组下标2的位置开始往后找
arr.indexOf('b', 2) //返回 -1
//表示从数组倒数第二个元素的位置开始往后找
arr.indexOf('b', -2) //返回 1
---code---
`
arrayObj.map = `
# map() 介绍与用法
map 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理的后值。
map 方法按照原始数组元素顺序依次处理元素。
map 不会改变原始数组 
---code---
arr.map(function(value, i, array){ return value })
---code---
# 参数说明：
map 方法接收一个回调函数，回调函数参数：
	value 必须，为数组元素
	index 可选，为数组元素下标
	array 可选，调用map的数组对象本身
# 示例：
---code---
let arr = ['a', 'b']
let newArr = arr.map(function(value, index, array){ 
	//必须返回一个值
	return value + index 
})
console.log(newArr) //输出['a0','b1']
//如下没有返回值的情况
let newArr = arr.map(function(value, i, array){ 
	value + index 
})
console.log(newArr) //输出[undefined,undefined]
---code---
`
arrayObj.forEach = `
# forEach() 遍历数组
是ES5中操作数组的一种方法，主要功能是遍历数组
---code---
arr.forEach(function(value, index, array){  })
---code---
# 参数说明：
forEach 方法接收一个回调函数，回调函数参数：
	value 必须，为数组元素
	index 可选，为数组元素下标
	array 可选，调用map的数组对象本身
# 示例：
---code---
let arr = [1, 2]
arr.forEach(function(value, index, array){
	//需要的操作，没有返回值
	alert(value)
})
//相当于
let arr = [1, 2]
for (var k = 0; k < arr.length; k++) {
 alert(array[k]);
}
---code---
`
arrayObj.concat = `
# concat() 方法用于连接两个或多个数组。
该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。
---code---
arr.concat(arrayX,arrayX,......,arrayX)
---code---
# 参数说明:
arrayX 必需, 该参数可以是具体的值，也可以是数组对象。可以是任意多个。
# 示例：
---code---
let arr = [1,2]
let arr1 = ['a', 'b']
let newArr = arr.concat(arr1, 'c')
console.log(newArr) //输出[1, 2, 'a', 'b', 'c']
---code---
# 返回值
返回一个新的数组。该数组是通过把所有 arrayX 参数添加到 newArr 中生成的。
如果要进行 concat() 操作的参数是数组，那么添加的是数组中的元素，而不是数组。
`
arrayObj.join = `
# join() 方法用于把数组中的所有元素放入一个字符串。
元素是通过指定的分隔符进行分隔的。
---code---
arr.join(separator)
---code---
# 参数说明：
separator 可选。指定要使用的分隔符。如果省略该参数，则使用逗号作为分隔符。
# 返回值
返回一个字符串。该字符串是通过把 arr 的每个元素转换为字符串，
然后把这些字符串连接起来，在两个元素之间插入 separator 字符串而生成的。
# 示例：
---code---
let arr = ['a', 'b', 'c']
arr.join('&') //返回 "a&b&c"
arr.join() //返回 "a,b,c"
---code---
`
arrayObj.slice = `
# slice() 方法可从已有的数组中返回选定的元素。
该方法并不会修改数组，而是返回一个子数组。
---code---
arr.slice(start,end)
---code---
# 参数说明：
start 必需。规定从何处开始选取(包含start)。如果是负数，那么它规定从数组尾部开始算起的位置。
    也就是说，-1 指最后一个元素，-2 指倒数第二个元素，以此类推。
-------
end 可选。规定从何处结束选取(不包含end)。该参数是数组片断结束处的数组下标。
    如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素。
    如果这个参数是负数，那么它规定的是从数组尾部开始算起的元素。
# 注意
若 end下标在start下标前面 或 同一位置则返回空数组
# 示例：
---code---
let arr = [1, 2, 3, 4, 5]

//返回从下标0开始的元素数组
arr.slice(0) //返回[1, 2, 3, 4, 5]

//返回从下标3开始的元素数组
arr.slice(3) //返回[ 4, 5]

//返回从下标0开始到下标2(不包含)的元素数组
arr.slice(0, 2) //返回[1, 2]

//返回从下标2开始到下标4(不包含)的元素数组
arr.slice(2, 4) //返回[3, 4]

//返回从数组倒数第3个元素开始到倒数第1个(不包含)的元素数组
arr.slice(-3, -1) //返回[3, 4]

//如下两种情况，都会返回空数组
arr.slice(2, 1) 或 arr.slice(1, 1)
---code---
`
arrayObj.splice = `
# splice() 方法向/从数组中添加/删除项目
该方法会改变原始数组, 然后返回被删除的项目数组。
---code---
arr.splice(index,howmany,item1,.....,itemX)
---code---
# 参数说明：
index 必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。
howmany 必需。要删除的项目数量。如果设置为 0，则不会删除项目。
item1, ..., itemX 可选。向数组添加的新项目。
# 返回值
Array	包含被删除项目的新数组，如果有的话。
# 说明：
splice() 方法可删除从 index 处开始的零个或多个元素，并且用参数列表中声明的一个
   或多个值来替换那些被删除的元素。如果从 arr 中删除了元素，则返回的是
   含有被删除的元素的数组。
# 示例：
---code---
let arr = [1, 2, 3]
//删除下标1的元素
arr.splice(1, 1) //返回[2]
console.log(arr) //输出[1, 3]

let arr = [1, 2, 3]
//在下标1的元素前面添加元素 'a'
arr.splice(1, 0, 'a') //返回[]
console.log(arr) //输出[1, "a", 2, 3]

let arr = [1, 2, 3]
//删除从下标1开始的2个元素，并添加元素 'a' 'b'
arr.splice(1, 2, 'a', 'b') //返回[2, 3]
console.log(arr) //输出[1, "a", "b"]
---code---
`
arrayObj.sort = `
# sort() 方法用于对数组的元素进行排序
数组在原数组上进行排序，不生成副本
---code---
arr.sort(sortby)
---code---
# 参数说明:
sortby 可选。规定排序顺序。必须是函数。
# 说明：
如果调用该方法时没有使用参数，将按字母顺序对数组中的元素进行排序，
说得更精确点，是按照字符编码的顺序进行排序。要实现这一点，
首先应把数组的元素都转换成字符串（如有必要），以便进行比较。
------------
如果想按照其他标准进行排序，就需要提供比较函数，该函数要比较两个值，然后返回一个
用于说明这两个值的相对顺序的数字。比较函数应该具有两个参数 a 和 b，其返回值如下：
	若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。
	若 a 等于 b，则返回 0。
	若 a 大于 b，则返回一个大于 0 的值。
# 示例：
---code---
let arr = [8, 5, 5, 1, 3]
//return a > b 则为升序排序 
arr.sort(function(a, b){ return a > b })
//返回[1, 3, 5, 5, 8]

//return a < b 则为降序排序 
arr.sort(function(a, b){ return a < b })
//返回[8, 5, 5, 3, 1]

//字符串排序, 只对比第一个字符字符编码，相等的才对比下一位字符
let arr = ['cab', 'cb', 'b']
//return a > b 则为升序排序 
arr.sort(function(a, b){ return a > b })
//返回["b", "cab", "cb"]
---code---
`
arrayObj.reverse = `
# reverse() 方法用于颠倒数组中元素的顺序
该方法会改变原来的数组，而不会创建新的数组
---code---
arr.reverse()
---code---
# 示例：
---code---
let arr = [1, 2, 3]
//颠倒数组的顺序
arr.reverse()
console.log(arr) //输出[3, 2, 1]
---code---
`
arrayObj.push_pop = `
title push & pop
# push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度
push 方法会直接修改原来的数组
---code---
arr.push(newelement1,newelement2,....,newelementX)
---code---
# 参数说明：
newelement1	必需。要添加到数组的第一个元素。
newelement2	可选。要添加到数组的第二个元素。
newelementX	可选。可添加多个元素。
# pop() 方法用于删除并返回数组的最后一个元素
pop 方法会直接修改原来的数组
---code---
arr.pop()
---code---
# 示例：
---code---
let arr = [1, 2]
//向数组末尾添加一个元素
arr.push(3) //返回数组长度
console.log(arr) //输出[1, 2, 3]

let arr = [1, 2]
//向数组末尾添加多个元素
arr.push(3, 4) 
console.log(arr) //输出[1, 2, 3, 4]

let arr = [1, 2]
//删除数组末尾的一个元素
arr.pop() //返回被删除的元素
console.log(arr) //输出[1]
---code---
`
arrayObj.shift_unshift = `
title unshift & shift
# unshift() 向数组的开头添加一个或多个元素，并返回新的长度
unshift 方法会直接修改原数组
---code---
arr.unshift(newelement1,newelement2,....,newelementX)
---code---
# 参数说明：
newelement1	必需。要添加到数组的第一个元素。
newelement2	可选。要添加到数组的第二个元素。
newelementX	可选。可添加多个元素。
# shift() 删除数组的第一个元素,返回被删除的元素
shift 方法会直接修改原数组
---code---
arr.shift()
---code---
# 示例：
---code---
let arr = [3, 4]
//向数组开添加一个元素
arr.unshift(1) //返回数组长度
console.log(arr) //输出[1, 3, 4]

let arr = [3, 4]
//向数组开添加多个元素
arr.unshift(1, 5) //返回数组长度
console.log(arr) //输出[1, 5, 3, 4]

let arr = [3, 4]
//删除数组开头的一个元素
arr.shift() //返回被删除的元素
console.log(arr) //输出[4]
---code---
`
arrayObj.filter = `
# filter() 过滤掉不需要的数组元素
filter 方法不会修改原数组，返回一个过滤好的新数组。
---code---
arr.filter( function(item, index){ return treu || false })
---code---
# 参数说明：
filter方法接收一个回调函数，函调函数参数
	item 数组元素
	index 数组下标
# 说明：
回调函数会返回一个Boolean值
	返回 true 则保留该元素
	返回 false 则过滤掉该元素
---code---
let arr = [1, 2, 3, 4]
//过滤掉 X%2 !== 0 的元素
arr.filter(function(item, index){
	return item % 2 === 0
}) 
// 返回新数组 [2, 4]
console.log(arr) //输出[1, 2, 3, 4]

//如果回调函数忘了 return
arr.filter(function(item,index){ ... })
//数组元素会全被过滤掉，返回一个空数组 []
---code---
`
arrayObj.toString = `
toString() 把数组转换为字符串
返回数组元素组成的字符串,数组中的元素之间用逗号分隔
# 示例：
---code---
let arr = ['a', 'b', 'c']
arr.toString() //返回'a,b,c'
// 与下面两个调用返回值一样
arr.join() 或 arr.join(',')
---code---
`