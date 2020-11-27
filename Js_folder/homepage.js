// for scrolling effect 
window.addEventListener("scroll", function(){
    		var header = document.getElementById('header2');
    		header.classList.toggle("sticky", window.scrollY > 0);
    		header.classList.toggle("newClass",window.scrollY > 0);
    	})
//for toggle  menu bars
$(document).ready(function(){
   $('.bars').click(function(){
   	$('.menu').slideToggle();
   });
//for gallery data filleds
$( '.js-filter' ).on( 'click', function() {
  
  var $attribute = $(this).attr('data-filter') ;$('li').removeClass("active");
$(this). addClass("active");
  console.log($attribute);
  if ( $attribute == 'All' ) {
    $( '.js-filterable' ).removeClass( 'is-hidden' );    
  } else {
    $( '.js-filterable' ).addClass( 'is-hidden' );
    $( '.js-filterable[data-filter=' + $attribute + ']' ).removeClass( 'is-hidden' );
  }
  
});

//for animation 
  $(window).scroll(function(){
      var positionTop =$(document).scrollTop();
      console.log(positionTop);
      if((positionTop > 450) && (positionTop < 900)){  $("#aboutHeading").addClass("animated rotateInUpRight");
        $("#aboutPara").addClass("animated zoomInUp");}
        if((positionTop > 916) && (positionTop < 2355)){   $("#galleryHeading").addClass("animated bounceInLeft");
      }
   });
//for about up arrow
   $('.next').click(function(){
      $('.slide').find('div.active').next().addClass('active');  $('.slide').find('div.active').prev().removeClass('active');
   })
  //for about down arrow
   $('.prev').click(function(){
      $('.slide').find('div.active').prev().addClass('active');  $('.slide').find('div.active').next().removeClass('active');
   })

});// carousal

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
        1000: { slidesPerView: 4,  }
    }
})