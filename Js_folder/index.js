// for menu bars

$(document).ready(function(){
   $('.bars').click(function(){
    $('.menu').slideToggle();
   });
  
  // Slider Options
  $(".Gallery-Slider .Slick-Gallery").slick({
    autoplay:true,
    autoplaySpeed:5000,
    speed:900,
    slidesToShow:1,
    slidesToScroll:1,
    pauseOnHover:false,
    dots:true,
    appendDots:$(".Slick-Navigation"),
    pauseOnDotsHover:true,
    cssEase:'linear',
    fade:true,
    draggable:false,
    asNavFor:".Gallery-Slider .Slick-Thumbnails",
    prevArrow:'<button class="PrevArrow"></button>',
    nextArrow:'<button class="NextArrow"></button>', 
  });
  
  // Thumbnails Options
  $(".Gallery-Slider .Slick-Thumbnails").slick({
    autoplay:false,
    speed:600,
    slidesToShow:5,
    slidesToScroll:1,
    pauseOnHover:false,
    cssEase:'linear',
    centerMode:true,
    draggable:false,
    focusOnSelect:true,
    asNavFor:".Gallery-Slider .Slick-Gallery",
    prevArrow:'<button class="PrevArrow"></button>',
    nextArrow:'<button class="NextArrow"></button>', 
  });
  
  // Play & Pause Controll Button
  $('.Slick-Navigation .Play').on('click',function(){
    $('.Gallery-Slider .Slick-Gallery').slick('slickPlay')
  });
  
  $('.Slick-Navigation .Pause').on('click',function(){
    $('.Gallery-Slider .Slick-Gallery').slick('slickPause')
  });
  
  // Show & Hide Thumbnails Button
  $(".Slick-Navigation .Thumbnails").click(function(){
    $(".Gallery-Slider .Slick-Thumbnails").toggleClass("ShowThum");
  });
  
})/* 
 * Credit:
 * Modal: https://www.runoob.com/try/try.php?filename=trycss_image_modal_js
 * 3D-carrousel: https://codepen.io/jaskiranchhokar/pen/wmGXav
 * Modified by Hilbert Kong
 */

var modals = document.getElementsByClassName("modal");

for(let i = 0; i < modals.length; i++) {
    let modal = modals[i];
    
    let img = document.getElementsByClassName("content-carousel")[0].getElementsByTagName("img")[i];
    let modalImg = document.getElementById("img" + i);
    let captionText = document.getElementsByClassName("caption")[i];
    
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        modalImg.alt = this.alt;
        captionText.innerHTML = this.alt;
    }
    
    let span = document.getElementsByClassName("close")[i];
    
    span.onclick = function () {
        modal.style.display = "none";
    }
}


