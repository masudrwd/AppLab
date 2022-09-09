window.onload = function(){
    document.querySelector(".preload").style.display = "none";
}

$(document).ready(function () {
    
    $('.toggle').click(function () { 
        $('nav .container .navbar-menubar .nav-bar').toggleClass('show-nav-bar')
    });

    $('.navbar-link').click(function () { 
        $('nav .container .navbar-menubar .nav-bar').removeClass('show-nav-bar')
    });

    $(window).on('load scroll', function () {

        var scroll = $(window).scrollTop();
        if (scroll > 10) {
            $('.fixed-top').addClass('stickyadd');
        } else {
            $('.fixed-top').removeClass('stickyadd');
        };

    });

    $('.btn-group button').click(function () {
        $(this).addClass('btns').siblings().removeClass('btns');
    });

    $('#monthly').click(function (e) { 
        e.preventDefault();
        $('.monthly').removeClass('monthly-', 400);
        $('.annualy').removeClass('annually')
    });

    $('#annually').click(function (e) { 
        e.preventDefault();
        $('.annualy').addClass('annually', 400)
        $('.monthly').addClass('monthly-');
    });

    var swiper = new Swiper(".HelloSwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

    $('.acc-body .titles').on('click', function () {
        var activeDiv = $(this).next('.acc-body .box').hasClass('active');
    
        if (activeDiv) {
            $(this).next('.acc-body .box').removeClass('active').slideUp();
            $(this).children('i').removeClass('fa-minus').addClass('fa-plus');
        } else {
            $('.acc-body .box').slideUp();
            $('.acc-body .titles').children('i').removeClass('fa-minus').addClass('fa-plus');
            $(this).next('.acc-body .box').addClass('active').slideDown();
            $(this).children('i').removeClass('fa-plus').addClass('fa-minus');
        }
    })

});