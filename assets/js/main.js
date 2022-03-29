$(function () {
    // гамбургер меню
    $('.hamburger').on('click', function () {
        $(this).toggleClass('active');
        $('header .menu').toggleClass('active');
        $('body').css({
            "overflow" : "hidden"
        })
    });

    $('.menu_top .close').on('click', function () {
        $('header .menu').removeClass('active');
        $('body').css({
            "overflow" : "visible"
        })
    });

    // меню при ресайзе
    let mobile = false;
    let headerContact = $('.header_contact');

    if ($(window).width() < 1139) {
        mobile = true;
        $('.menu').append(headerContact);
    }

    $(window).on('resize', function () {
        if ($(window).width() < 1139 && !mobile) {
            mobile = true;
            $('.menu').append(headerContact);
        }

        if ($(window).width() >= 1139 && mobile) {
            mobile = false;
            $('.menu').after(headerContact);

        }
    });

    new WOW().init();


    $(window).scroll(function() { // При прокрутке попадаем в эту функцию
        /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
        if ($(this).scrollTop() > 10) {
            $('.goToTop_btn').fadeIn();
            $('.goToTop_btn').css({
                "opacity" : 1
            })
        } else {
            $('.goToTop_btn').fadeOut();
        }
    });
    
    $('.goToTop_btn').click(function() { // При клике по кнопке "Наверх" попадаем в эту функцию
        /* Плавная прокрутка наверх */
        scrollto(0, 2000);
    });
    
    
    // scrollto ПЛАВНЫЕ ЯКОРИ
    window.scrollto = function(destination, speed) {
        if (typeof speed == 'undefined') {
            speed = 800;
        }
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination - 60
        }, 2000);
    };
    
    $("a.scrollto").click(function() {
        let elementClick = $(this).attr("href")
        let destination = $(elementClick).offset().top;
        scrollto(destination);
        return false;
    });

    //Прокрутка до нужного блока
    $("#firstStep").click(function() {
        $('html, body').animate({
            scrollTop: $(".steps_item.first.item").offset().top
        }, 1000);
    });
    $("#secondStep").click(function() {
        $('html, body').animate({
            scrollTop: $(".steps_item.second.second").offset().top
        }, 1300);
    });
    $("#thirdStep").click(function() {
        $('html, body').animate({
            scrollTop: $(".steps_item.first.third").offset().top
        }, 1600);
    });
    $("#fourthStep").click(function() {
        $('html, body').animate({
            scrollTop: $(".steps_item.first.seven").offset().top
        }, 1900);
    });
    $("#fiveStep").click(function() {
        $('html, body').animate({
            scrollTop: $(".steps_item.second.fourth").offset().top
        }, 2100);
    });
    $("#sixStep").click(function() {
        $('html, body').animate({
            scrollTop: $(".steps_item.first.five").offset().top
        }, 2400);
    });
    $("#sevenStep").click(function() {
        $('html, body').animate({
            scrollTop: $(".steps_item.second.six").offset().top
        }, 2700);
    });
    $("#eightStep").click(function() {
        $('html, body').animate({
            scrollTop: $(".steps_item.second.eight").offset().top
        }, 3000);
    });
});

