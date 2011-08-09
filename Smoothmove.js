// Page Scroller Plugin by Collin Olan
(function( $ ){

	$.fn.smoothmove = function( options ) {

		var settings = {
			'speed': 300,
			'offsetting': -30
		};

		return this.each(function() {
			if ( options ) { 
				$.extend( settings, options );
			}

			$(this).click(function() {
				var anchor = $(this).attr("href");
				if ($(anchor).length > 0) {
					var destination = parseInt($(anchor).offset().top settings.offsetting);
					$("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, settings.speed );
					return false;
				} else {
					return;
				};
				
			});

		});

	};

})( jQuery );