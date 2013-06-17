define(function(require, exports, module) {
	exports.run = function() {
		$('#alert').click(function() {
			alert('弹出了一个框！');
		});
	}
});