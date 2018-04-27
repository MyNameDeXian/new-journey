export const saying = [
`
title 背影
----------
一个男的跑到一个女孩面前
女孩：“干嘛？”
男的："刚我和朋友打赌说，你的背影迷倒千军万马，正面吓倒百万雄师，我过来看下谁赢了"
女孩："那谁赢了"
男的："我赢了，我姓百万，名叫雄师，我还站着，所以我赢了"
女孩看着男的颤抖的双腿沉默不语了
--------
`,
`
title 无题
-----
	去闺蜜家蹭饭，发现她老公在打游戏，游戏里各种送人头各种灰屏，
	我闺蜜当时就一个劲地安慰他老公慢慢来不着急。
	又过了一会儿，她实在看不下去了，撩起袖子就对他老公吼了一句：
	让开，让我来，你给我死去厨房做饭去。。
-----
`,
`
title 愿
----
	和你
	若梦，便一梦不醒。
	若真，跪着也要陪你走完一生。
	.
	.
	.
	看着旁边200斤的女朋友，我在那片阴影中瑟瑟发抖.........
----
`,
]
//随机数 Math.random() 0-1, 随机 40-100
export function random(maxNum, minNUm){
	minNUm = minNUm || 0; 
	maxNum = maxNum || saying.length - 1;
	let num = Math.random() *(maxNum - minNUm + 1) + minNUm
	return saying[parseInt(num)];
}
// 选择
export function selectSaying(arr){
	let sum = random(arr.length);
	let result = [];
	while( result.length < sum ){
		let num = random(arr.length);
		if(result.indexOf(num) === -1){
			result.push(num)
		}
	}
	return result;
}