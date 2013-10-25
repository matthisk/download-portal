(function($) {
	AppView = function(node) {
		this.$node = node;
	}

	AppView.prototype.load = function() {
		this.$node.addClass('app__loading');
	}

	AppView.prototype.unLoad = function() {
		this.$node.removeClass('app__loading');
	}

	AppController = function(node,buttons) {
		this.$node = node;
		this.$buttons = buttons;
		this.frame = this.$node.find('iframe');

		this.view = new AppView(this.$node);

		this.bindEventHandlers();
	}

	AppController.prototype.bindEventHandlers = function() {
		var self = this;

		this.frame.on('load',function() {
			self.view.unLoad();
		});

		this.$buttons.click(function(e) {
			e.preventDefault();

			self.view.load();
			self.frame.attr('src',$(this).attr('href'));
			$('.nav .active').removeClass('active');
			$(this).parent().addClass('active');
		});
	}


	$(document).ready(function() {
		var appController = new AppController($('.app'),$('.nav a'));
	});
})(jQuery);