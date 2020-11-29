// for scrolling effect 
window.addEventListener("scroll", function() {
    var header = document.getElementById('header2');
    header.classList.toggle("sticky", window.scrollY > 0);
    header.classList.toggle("newClass", window.scrollY > 0);
})
//for toggle  menu bars
$(document).ready(function() {
    $('.bars').click(function() {
        $('.menu').slideToggle();
    });
    //for gallery data filleds
    $('.js-filter').on('click', function() {
        var $attribute = $(this).attr('data-filter');
        $('li').removeClass("active");
        $(this).addClass("active");
        console.log($attribute);
        if ($attribute == 'All') {
            $('.js-filterable').removeClass('is-hidden');
        } else {
            $('.js-filterable').addClass('is-hidden');
            $('.js-filterable[data-filter=' + $attribute + ']').removeClass('is-hidden');
        }
    });
    //for about up arrow
    $('.next').click(function() {
        $('.slide').find('div.active').next().addClass('active');
        $('.slide').find('div.active').prev().removeClass('active');
    })
    //for about down arrow
    $('.prev').click(function() {
        $('.slide').find('div.active').prev().addClass('active');
        $('.slide').find('div.active').next().removeClass('active');
    })

    /*===== SCROLL REVEAL ANIMATION =====*/
    const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true
    })

    /*SCROLL ABOUT*/
    sr.reveal('.aboutLeftContent', { delay: 300 })
    sr.reveal('#aboutHeading', { delay: 350 })
    sr.reveal('#aboutPara', { delay: 400 })
    sr.reveal('.galleryUl', { delay: 450 })
    /*
    sr.reveal('.Bio-group', { delay: 500 })*/
    sr.reveal('.product', { delay: 550 })
    sr.reveal('.linkedIn-li', { delay: 600, interval: 200 })

    /*SCROLL SKILLS*/
    sr.reveal('.MainHeading', {})
    sr.reveal('.left-col h3', { delay: 40 })
    sr.reveal('.left-col p', { delay: 100 })
    sr.reveal('.wrapper', { delay: 160 })
    sr.reveal('.mid-col h3', { delay: 40 })
    sr.reveal('.mid-col p', { delay: 100 })
    sr.reveal('.right-col h3', { delay: 40 })
    sr.reveal('.right-col ul li', { delay: 100 })
    //carousal
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav:true,
    mouseDrag:false,
    autoplay:true,
    animateOut: 'slideOutUp',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
});
// banner caro

// carousal
var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    slidesPerView: 4,
    paginationClickable: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },

        767: {
            slidesPerView: 1,


        },
        1000: { slidesPerView: 4, }
    }
})