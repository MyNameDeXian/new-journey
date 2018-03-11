import createHistory from 'history/createHashHistory'
const hashHistory = createHistory('hashHistory')

// 内容高度
export const ctnHeight = window.innerHeight - 70;
export const api = {};
//获取路由参数
api.getUrlParam = function(key){
	let params = location.hash.split('=')[1];
	return (params || '').split('&')[0];
}
api.getPathname = function(){
	let hashHistory = createHistory('hashHistory');
	return hashHistory.location.pathname
}
api.push = function(router){
	hashHistory.push(router);
}
api.goBack = function(){
	hashHistory.go(-1);
}
api.replace = function(router){
	hashHistory.replace(router);
}
