(function ($) {
    "use strict";

    
    ///============= Preloader =============\\\
    $(window).on('load', function() {
        $(".preloader").fadeOut();     
    });
    
    var header = $("header");
    // Add a scroll event listener to the window object
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
    
        if (scrollPosition > 60) {
            header.addClass('header-sticky');
        } else {
            header.removeClass('header-sticky');
        }
    });
    ///============= Tooltip Init =============\\\
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-te-toggle="tooltip"]'));
    tooltipTriggerList.map((tooltipTriggerEl) => new te.Tooltip(tooltipTriggerEl));

    ///============= Sidebar Expanded =============\\\
    function sidebarMenu(selector, actionSelector) {
        var selectorr = $(selector);
        selectorr.on("click", function() {
            $(selector).toggleClass('active');
        });
        
        var hamburgerbtn = $(selector);
        hamburgerbtn.on("click", function() {
            $(actionSelector).toggleClass('active');
        });

        $('.main-content, .sidebar-nav ul li a').on('click', function(e) {
            $(actionSelector).removeClass("active");
        });    
    };

    sidebarMenu('.sidebar_toggle', '.sidebar-nav'); 


    ///============= Sidebar Expanded =============\\\
    $('a:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 80
                }, 1000);
                return false;
            }
        }
    });

    var innerpageslider = new Swiper('.innerpageslider .swiper', {
        spaceBetween: 30,
        slidesPerView: 1,
        loop: 1,
        speed: 8000,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        allowTouchMove: !1,
        breakpoints: {
            600: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1280: {
                slidesPerView: 4,
            }
        },
        navigation: {
            nextEl: '.innerpageslider .button-next',
            prevEl: '.innerpageslider .button-prev',
        },
    })

  
})(jQuery);


