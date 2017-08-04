jQuery(function() {

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
    $("head").append("<link href='http://fonts.googleapis.com/css?family=PT+Serif:400,700,400italic,700italic|Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800|Roboto+Slab:300,700,100,400&subset=latin,cyrillic-ext,cyrillic' rel='stylesheet' type='text/css'>");


    /*-------------------------------------------------*/
    /* =  placeholder
    /*-------------------------------------------------*/
    jQuery('input[placeholder], textarea[placeholder]').placeholder();


    /*-------------------------------------------------*/
    /* =  inputmask
    /*-------------------------------------------------*/
    $(".field_phone").inputmask("+7 (999) 999-99-99");



    /*-------------------------------------------------*/
    /* =  checked
    /*-------------------------------------------------*/
    $('input:checked').addClass("selected");
    $('input').change(function() {
        $('input:not(:checked)').removeClass("selected");
        $(this).addClass("selected");
    });



    /*-------------------------------------------------*/
    /* =  menu
    /*-------------------------------------------------*/
    var $menu = $("#nav");

    $(window).scroll(function() {
        if ($(this).scrollTop() > 300 && $menu.hasClass("default")) {
            $menu.fadeIn(200).removeClass("default").addClass("fixed");
        } else if ($(this).scrollTop() <= 300 && $menu.hasClass("fixed")) {
            $menu.fadeOut(0).removeClass("fixed").addClass("default");
        }
    });

    $('#btn-menu').click(function() {
        $(this).toggleClass('open');
        $('.menu').toggleClass('menu-open');
    });


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

});