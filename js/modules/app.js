/**
*项目主模块
*/
define(function(require, exports, module) {
	//加载jquery, 并把它$设为全局变量
	window.$ = window.jQuery = $ = require('jquery');

	//定义一个全局的模块加载函数.module为模块名，options为参数
	exports.script_load = function(module, options) {
		//使用require.async异步加载模块。模块需要提供一个固定的对外调用接口，这里定义为run。
		require.async('modules/' + module, function(module) {
			if (typeof(module.run) === 'function') {
				module.run(options);
			}
		});
	}

	window.script_load = exports.script_load
});