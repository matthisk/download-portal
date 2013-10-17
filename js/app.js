(function($) {
	$(document).ready(function() {
		var $applicatie = $('.applicatie');
		var $frame = $applicatie.find('iframe');

		setTimeout(function() {
			$('.container').addClass('collapsed');
		}.bind(this),3000);

		$frame.on('load',function() {
			console.log('loaded');
			$applicatie.removeClass('loading');
		});

		$('.nav-main a').click(function(e) {
			e.preventDefault();

			$applicatie.addClass('loading');
			$frame.attr('src',$(this).attr('href'));
			$('.active').removeClass('active');
			$(this).parent().addClass('active');
		});
	});
})(jQuery);