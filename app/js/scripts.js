$(document).ready(function () {

   	$('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="prev-left"></button>',
        nextArrow: '<button class="prev-right"></button>',
        dots: true
    });

    $('.act-products__list').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="prev-left__n"></button>',
        nextArrow: '<button class="prev-right__n"></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    //dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    variableWidth: true,                
                }
            },
            {
                breakpoint: 320,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    variableWidth: true,
                    prevArrow: false,
                    nextArrow: false
                }
            }
        ]
    });

    $('button[data-tab]').click(function () {
        var target = $(this).attr('data-tab');
        $('[data-tab]').removeClass('active');
        $('section[data-tab="' + target + '"]').addClass('active');
        $(this).toggleClass('active');
    });

     $('.related-products__list').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="prev-left__n"></button>',
        nextArrow: '<button class="prev-right__n"></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    //dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    variableWidth: true,                
                }
            },
            {
                breakpoint: 320,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    variableWidth: true,
                    prevArrow: false,
                    nextArrow: false
                }
            }
        ]
    });

     $('.ordering-label__fiz').click(function () {
        $('.ordering-form__fiz').addClass('active');
        $('.ordering-form__yur').removeClass('active');
    });

     $('.ordering-label__yur').click(function () {
        $('.ordering-form__yur').addClass('active');
        $('.ordering-form__fiz').removeClass('active');
    });

     $('.ordering-label__deliv').click(function () {
        $('.ordering-form__deliv').addClass('active');
        $('.ordering-form__pickup').removeClass('active');
    });

     $('.ordering-label__pickup').click(function () {
        $('.ordering-form__pickup').addClass('active');
        $('.ordering-form__deliv').removeClass('active');
    });

    $('.ordering-label__beznal').click(function () {
        $('.ordering-form__beznal').addClass('active');
        $('.ordering-form__nal').removeClass('active');
    });
    $('.ordering-label__nal').click(function () {
        $('.ordering-form__nal').addClass('active');
        $('.ordering-form__beznal').removeClass('active');
    });

     $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      prevArrow: '<button class="prev-left__p"></button>',
      nextArrow: '<button class="prev-right__p"></button>',
      focusOnSelect: true,
      //centerMode: true,
      //focusOnSelect: true
    });

    $('.header__menu-toggle').on('click', function(e) {
      e.preventDefault();
      $(this).toggleClass('header__menu-toggle--active');
      $('.header-menu').toggleClass('active');
    });

    $('.catalog-link').on('click', function(e) {
        e.preventDefault();
      $('.catal-dropdown__menu').toggleClass('active');
    });

    $('.catal-dropdown__menu-btn').on('click', function(e) {
      $('.catal-dropdown__menu').removeClass('active');
    });                           

});