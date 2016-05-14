jQuery(function () {
var menu = jQuery('.block_top_menu').html()
	init_menu();
	jQuery('.menu-item a[href="http://#"] , .menu-item a[href="#"]').click(function(){
		return false;
	});
	jQuery('.menu-item a[href="http://home"]').attr('href' , blogurl);
	jQuery("a[rel^='prettyPhoto']").prettyPhoto({
		deeplinking : false,
		keyboard_shortcuts : false
	});
// logo slider start
		var logos = jQuery('.block_logos_slider').html();
		
		function init_logo_slider() {
			var num = (jQuery('.wrapper').outerWidth() < 480) ? 1 : 4;
			jQuery('#logos_slider').anythingSlider({
				expand : true,
				buildNavigation : false,
				buildStartStop : false,
				showMultiple : num,
				changeBy : num
			});
		}
		init_logo_slider();
		
		jQuery(window).resize(function() {
			jQuery('.block_logos_slider').html(logos);
			init_logo_slider();
			if(jQuery('.block_top_menu').hasClass('type_1') || jQuery('.block_top_menu').hasClass('type_2')) {
				jQuery('.block_top_menu').html(menu);
				init_menu();
			   }
		});
// logo slider end
	jQuery('.tooltip').tooltip({
							position : 'top right',
							offset : [0, -35],
							effect: 'fade'
						});
	jQuery('.tooltip_click').tooltip({
		position : 'top right',
		offset : [0, -35],
		effect: 'fade',
		events : {
			def : 'click, mouseleave'
		}
	});
	jQuery('.block_tabs .tabs').tabs('.block_tabs .tab_content', {
		initialIndex : 0
	}); 
});