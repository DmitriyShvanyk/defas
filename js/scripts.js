;(function() {

    /*-------------------------------------------------*/
    /* =  preloader
    /*-------------------------------------------------*/
    $(window).on('load', function() {
        var $preloader = $('#page-preloader'),
            $spinner = $preloader.find('.spinner');
        $spinner.fadeOut();
        $preloader.delay(350).fadeOut('slow');
    });

    /*-------------------------------------------------*/
    /* =  fonts
    /*-------------------------------------------------*/
    $("head").append("<link href='https://fonts.googleapis.com/css?family=PT+Serif:400,700,400italic,700italic|Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800|Roboto+Slab:300,700,100,400&subset=latin,cyrillic-ext,cyrillic' rel='stylesheet'>");
	
	
    /*-------------------------------------------------*/
    /* =  inputmask
    /*-------------------------------------------------*/
    $(".form__control--phone").inputmask("+7 (999) 999-99-99");


    /*-------------------------------------------------*/
    /* =  navbar
    /*-------------------------------------------------*/
    function scrollNavbar(){
		var navbar = document.querySelector('.navbar');
		var scrollY;
		
		window.addEventListener('scroll', function(){
			
			scrollY = window.scrollY;
			
			if(scrollY > 300){
				navbar.classList.add('navbar--fixed');
			}
			else{
				navbar.classList.remove('navbar--fixed');
			}
			
		});	
	}
	scrollNavbar();	
	
	function showNavbarMobile(){
		var navbarHamburger = document.querySelector('.navbar__hamburger');
		var navbarMenu = document.querySelector('.navbar__menu');	
		
		navbarHamburger.addEventListener('click', function(){			
			this.classList.toggle('navbar__hamburger--open');
			navbarMenu.classList.toggle('navbar__menu--open');
		});	
	}
	showNavbarMobile();
	   


    /*-------------------------------------------------*/
    /* = fancybox gallery img
    /*-------------------------------------------------*/
    jQuery(".b-pict").attr('rel', 'group').fancybox({
        helpers: {
            title: {
                type: 'inside'
            },
            thumbs: {
                width: 50,
                height: 37,
                position: 'bottom'
            },
            overlay: {
                locked: false
            }
        },
        afterLoad: function() {
            this.title = (this.title ? '' + this.title + '<br />' : '') + 'Image ' + (this.index + 1) + ' of ' + this.group.length;
        }
    });
	

    /*-------------------------------------------------*/
    /* = fancybox gallery swf
    /*-------------------------------------------------*/
    jQuery(".b-swf-item").attr('rel', 'group').fancybox({
        helpers: {
            title: {
                type: 'inside'
            },
            thumbs: {
                width: 50,
                height: 37,
                position: 'bottom'
            },
            overlay: {
                locked: false
            }
        },
        afterLoad: function() {
            this.title = (this.title ? '' + this.title + '<br />' : '') + 'Object ' + (this.index + 1) + ' of ' + this.group.length;
        }
    });
	

    /*-------------------------------------------------*/
    /* = fancybox popup
    /*-------------------------------------------------*/
    jQuery(".modalbox").fancybox({
        padding: [25, 5, 0, 5],
        fitToView: false,
        maxWidth: 1000,
        maxHeight: 9999,
        width: '98%',
        height: '10000px',
        autoSize: false,
        'scrolling': 'no'
    });

})();