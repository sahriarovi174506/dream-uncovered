(function ($) {
    "use strict";

    // ------- Prealoder ------
    $(window).on('load', function () {
        $("#preloader").delay(300).fadeOut("slow");
    });


    // Handle Menu on Sreen scrolling
    function MenuOnScrol() {
        const elementToModify = document.querySelector(".site_header");
        let lastScrollTop = 0;
        window.addEventListener("scroll", () => {
            const scrollTop = window.scrollY || window.pageYOffset;
            if (scrollTop > lastScrollTop && lastScrollTop > 100) {
                elementToModify.classList.add("sticky");
            } else if (lastScrollTop < 210) {
                elementToModify.classList.remove("sticky");
            }
            lastScrollTop = scrollTop;
        });
    }
    MenuOnScrol();



    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').addClass("topbtn_hide");
        } else {
            $('.back-to-top').removeClass("topbtn_hide");
        }


    });
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);

    });


    $(document).ready(function () {
        MenuOnScrol();


        // Toggle Menu
        $('.hamburger').click(function (e) {
            $('.header_right').addClass("active");
        });

        $('.close_menu').click(function (e) {
            $('.header_right').removeClass("active");
        });


        // ats_sldier
        $('.personal_growth_slider').owlCarousel({
            loop: true,
            items: 1.5,
            nav: false,
            dots: false,
            autoWidth: false,
            center: true,
            smartSpeed: 700,
            margin: 15,
            responsive: {
                0: {
                    margin: 10,
                },
                767: {
                    items: 1.5,
                },

            }
        });


    });

})(jQuery);