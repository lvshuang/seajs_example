define(function(require, exports, module) {

	require('jquery.validate');

	var onReady = function() {
		var $form = $('form.login-form');
		$form.validate({
			rules: {
				'[name=username]': {
					requirede: true
				},
				'[name=password]': {
					required: true
				}
			},
			submitHandler: function(form) {
				form.submit();
			}
		});
	};

	exports.run = function() {
		$(onReady());
	}

});