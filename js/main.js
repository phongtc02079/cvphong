//document.write('<link href="" rel="stylesheet" type="text/css" id="g_font" /><script src="includes/jquery.cookie.js" type="text/javascript"></script><script src="includes/custom_config.js" type="text/javascript"></script><script src="includes/custom.js" type="text/javascript"></script><link href="includes/custom.css" rel="stylesheet" type="text/css"/><link rel="stylesheet" media="screen" type="text/css" href="includes/colorpicker/colorpicker.css" /><script type="text/javascript" src="includes/colorpicker/colorpicker.js"></script>');

		/* Google fonts with links
		'Allan' : 'http://fonts.googleapis.com/css?family=Allan:700&v2' ,
		'Allerta' : 'http://fonts.googleapis.com/css?family=Allerta&v2' ,
		'Amaranth' : 'http://fonts.googleapis.com/css?family=Amaranth&v2' ,
		'Bangers' : 'http://fonts.googleapis.com/css?family=Bangers&v2' ,
		'Bevan' : 'http://fonts.googleapis.com/css?family=Bevan&v2' ,
		'Bowlby One' : 'http://fonts.googleapis.com/css?family=Bowlby+One&v2' ,
		'Buda' : 'http://fonts.googleapis.com/css?family=Buda:300&v2' ,
		'Candal' : 'http://fonts.googleapis.com/css?family=Candal&v2' ,
		'Cantarell' : 'http://fonts.googleapis.com/css?family=Cantarell&v2' ,
		'Carter One' : 'http://fonts.googleapis.com/css?family=Carter+One&v2' ,
		'Covered By Your Grace' : 'http://fonts.googleapis.com/css?family=Covered+By+Your+Grace&v2' ,
		'Damion' : 'http://fonts.googleapis.com/css?family=Damion&v2' ,
		'Francois One' : 'http://fonts.googleapis.com/css?family=Francois+One&v2' ,
		'Inconsolata' : 'http://fonts.googleapis.com/css?family=Inconsolata&v2' ,
		'Istok Web' : 'http://fonts.googleapis.com/css?family=Istok+Web&v2' ,
		'Kameron' : 'http://fonts.googleapis.com/css?family=Kameron&v2' ,
		'Kreon' : 'http://fonts.googleapis.com/css?family=Kreon&v2' ,
		'Lobster' : 'http://fonts.googleapis.com/css?family=Lobster&v2' ,
		'Lobster Two' : 'http://fonts.googleapis.com/css?family=Lobster+Two&v2' ,
		'Lora' : 'http://fonts.googleapis.com/css?family=Lora&v2' ,
		'Maiden Orange' : 'http://fonts.googleapis.com/css?family=Maiden+Orange&v2' ,
		'Mako' : 'http://fonts.googleapis.com/css?family=Mako&v2' ,
		'Maven Pro' : 'http://fonts.googleapis.com/css?family=Maven+Pro&v2' ,
		'Metrophobic' : 'http://fonts.googleapis.com/css?family=Metrophobic&v2' ,
		'Muli' : 'http://fonts.googleapis.com/css?family=Muli&v2' ,
		'Nunito' : 'http://fonts.googleapis.com/css?family=Nunito&v2' ,
		'Open Sans Condensed' : 'http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300&v2' ,
		'Oswald' : 'http://fonts.googleapis.com/css?family=Oswald&v2' ,
		'Pacifico' : 'http://fonts.googleapis.com/css?family=Pacifico&v2' ,
		'Paytone One' : 'http://fonts.googleapis.com/css?family=Paytone+One&v2' ,
		'Playfair Display' : 'http://fonts.googleapis.com/css?family=Playfair+Display&v2' ,
		'PT Serif Caption' : 'http://fonts.googleapis.com/css?family=PT+Serif+Caption&v2' ,
		'Quattrocento' : 'http://fonts.googleapis.com/css?family=Quattrocento&v2' ,
		'Raleway' : 'http://fonts.googleapis.com/css?family=Raleway:100&v2' ,
		'Rokkitt' : 'http://fonts.googleapis.com/css?family=Rokkitt&v2' ,
		'Shanti' : 'http://fonts.googleapis.com/css?family=Shanti&v2' ,
		'Tangerine' : 'http://fonts.googleapis.com/css?family=Tangerine&v2' ,
		'Ubuntu' : 'http://fonts.googleapis.com/css?family=Ubuntu:300&v2' ,
		'Varela Round' : 'http://fonts.googleapis.com/css?family=Varela+Round&v2' ,
		'Yanone Kaffeesatz' : 'http://fonts.googleapis.com/css?family=Yanone+Kaffeesatz&v2'
		*/
		
		//input in href attribute link for google font, you have chosen (e.g. document.write('<link href="http://fonts.googleapis.com/css?family=Metrophobic&v2" rel="stylesheet" type="text/css" />'); for Metrophobic font)
		document.write('<link href="" rel="stylesheet" type="text/css" />');
		

/* mobile */
var isMobile = false;
function isMobile_f() {
    var array_mobileIds = new Array('iphone', 'android', 'ipad', 'ipod');
    var uAgent = navigator.userAgent.toLowerCase();
	
    for (var i=0; i<array_mobileIds.length; i++) {
		if(uAgent.search(array_mobileIds[i]) > -1) {
			isMobile = true;
		}
    }
}
isMobile_f();
if(isMobile) {
	document.write('<link href="layout/mobile.css" rel="stylesheet" type="text/css" />');
}


function init_connect() {
	var full_width = 0;
	var b_width = 0;
	var flag = true;
	
	jQuery('#connect_social a').each(function() {
		var mar = parseInt(jQuery(this).css('margin-left'));
		full_width = full_width + mar + jQuery(this).width();
	});
	
	jQuery('#connect_social .inner').css({'width' : full_width + 'px'});
	full_width = jQuery('#connect_social .inner').outerWidth();
	
	jQuery('a.lnk_connect').live('click', function() {
		if(flag) {
			flag = false;
			b_width = (jQuery('#connect_social').hasClass('opened')) ? 1 : full_width;
			jQuery('#connect_social').animate({
					width : b_width
				},
				300,
				function() {
					flag = true;
					jQuery('#connect_social').toggleClass('opened');
				}
			);
		}
	});
}

function init_scrollbar_menu() {
	var menu_content = jQuery('.block_top_menu.type_top').html();
	jQuery('#header > .inner').append('<div class="block_top_menu_narrow" />');
	jQuery('.block_top_menu_narrow').html(menu_content);
	jQuery('.block_top_menu_narrow > ul').removeAttr('id').removeClass('sti-menu');
	jQuery('.block_top_menu_narrow li').removeAttr('style');
	jQuery('.block_top_menu_narrow div').remove();
	jQuery('.block_top_menu_narrow .main_text').each(function() {
		var menu_text = jQuery(this).html();
		jQuery(this).parent().html(menu_text);
	});
	
	var text = (jQuery('.block_top_menu_narrow .current_page_item > a').html()) ? jQuery('.block_top_menu_narrow .current_page_item > a').html() : 'Home';
	jQuery('.block_top_menu_narrow').prepend('<div class="title"><p>' + text + '</p></div>');
	jQuery('.block_top_menu_narrow > ul').wrap('<div class="menu_narrow"><div class="viewport"><div class="overview">');
	jQuery('.block_top_menu_narrow .menu_narrow').prepend('<div class="scrollbar"><div class="track"><div class="thumb"></div></div></div>');
	
	jQuery('.block_top_menu_narrow .title p').click(function() {
		jQuery('.block_top_menu_narrow .menu_narrow').slideToggle(300, function() {
			jQuery('.block_top_menu_narrow .menu_narrow').tinyscrollbar({
				sizethumb : 67
			});
		});
	});
}

var is_narrow_done = false;
function init_menu() {
	var menu_width = 100 / jQuery('.block_top_menu > ul > li').length;
	jQuery('.block_top_menu.type_1 > ul > li, .block_top_menu.type_2 > ul > li, .block_top_menu.type_top > ul > li').css({'width' : menu_width + '%'});
	jQuery('.block_top_menu').show();
	
	if(!isMobile && !jQuery('body').hasClass('no_animation')) {
		jQuery('#sti-menu').iconmenu({
			defaultTextColor : '#ffffff',
			hoverBgColor : '#ecf0ef',
			disabledClass : '.current_page_item'
		});
	}
	
	jQuery('.block_top_menu.type_3 li').hover(
		function() {
			jQuery(this).animate({
				left : 10,
				top : 10
			}, 150, 'easeInOutBack');
		},
		function() {
			jQuery(this).animate({
				left : 0,
				top : 0
			}, 150, 'easeInOutBack');
		}
	);
	
	if(!is_narrow_done && jQuery('.block_top_menu').hasClass('type_top')) {
		is_narrow_done = true;
		init_scrollbar_menu();
	}
}

function init_list_2() {
	jQuery('.list_2 li a').each(function() {
		var text = jQuery(this).html();
		jQuery(this).html('<span>' + text + '</span>');
	});
}


jQuery(document).ready(function() {
	init_connect();
	init_list_2();
	
	jQuery('.block_show_code a').live('click' , function(e){
		jQuery(this).parent().toggleClass('expanded');
		jQuery(this).parent().next().slideToggle();
		
		e.preventDefault();
	});
	
	jQuery('.block_uploader input').live('change', function() {
		var text = jQuery(this).val();
		
		jQuery(this).parent().find('.path').html(text);
	});
});

jQuery(function() {
	/*
	jQuery('.block_top_menu .main_text').attr('data-type', 'mText');
	jQuery('.block_top_menu .sub_text').attr('data-type', 'sText');
	jQuery('.block_top_menu .sti-icon').attr('data-type', 'icon');
	*/
	
	jQuery('.block_top_menu li:has(.sti-item)').each(function() {
		jQuery(this).find('.main_text').attr('data-type', 'mText');
		if(jQuery(this).find('.sub_text').length > 0) jQuery(this).find('.sub_text').attr('data-type', 'sText');
		else jQuery(this).find(' > a').append('<span class="sub_text sti-item" data-type="sText"></span>');
		jQuery(this).find('.sti-icon').attr('data-type', 'icon');
	});
	
	jQuery('.block_top_menu.type_top a').each(function() {
		var text = jQuery(this).find('.main_text').html();
		if(text != null) jQuery(this).prepend('<span>' + text + '</span>');
	});
	
	jQuery('.block_top_menu a').append('<b></b>');
	
	jQuery('#logos_slider img').hover(
		function() {
			var width = jQuery(this).width();
			jQuery(this).css({
				'width' : width * 1.1 + 'px',
				'margin-top' : - width * 0.05 + 'px'
			});
		},
		function() {
			var width = jQuery(this).width();
			jQuery(this).css({
				'width' : 'auto',
				'margin-top' : 0 + 'px'
			});
		}
	);
});