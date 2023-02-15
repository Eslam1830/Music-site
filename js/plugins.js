$(document).ready(function () {

  // header height

  $(function () {
    $(".header").height($(window).height());

    $(window).resize(function () {
      $(".header").height($(window).height());
    });
  });

  // loading page

  $(window).on('load', function(){
    $('.loading').fadeOut(2000);
})

  // navbar color

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 140) {
      $("nav").css({
        backgroundColor: "#051024",
        padding: "15px 0",
        "box-shadow": "8px 0 5px #000",
      });
    } else {
      $("nav").css({
        backgroundColor: "transparent",
        padding: "25px 0",
        "box-shadow": "none",
      });
    }
  });

  // smooth scroll

  $('nav li a').on('click', function(){
    $('html, body').animate({
      scrollTop: $('#' + $(this).data('scroll')).offset().top -100
    }, 1000)
  });

  // add active to links

  $('nav li a').on('click', function(){
    $(this).addClass('active').parent().siblings().find('a').removeClass('active');
  })

  $(window).scroll(function(){
    $('section').each(function(){
      if($(window).scrollTop() +101 >= $(this).offset().top ){
        var secID = $(this).attr('id');
        $('nav li a').removeClass('active');
        $('nav li a[data-scroll="'+ secID +'"]').addClass('active');
      }
    })

    // button up

    if($(window).scrollTop() >= 1000){
      $('.up').fadeIn(1000)
    }else{
      $('.up').fadeOut(1000)
    }

  })

  // click on button up

  $('.up').on('click', function(){
    $('body,html').animate({
      scrollTop: 0
    },500)
  })

  // jokes

  $(function(){
    var photoWidth;
    photoWidth = $('#rightPhoto').height();
    $('#leftPhoto').height($('#rightPhoto').height());

    $(window).resize(function () {
      $('#leftPhoto').height($('#rightPhoto').height());
    });
  })

  // nice scroll

  $(function(){
    $('body').niceScroll({
      cursorcolor: "#ff275e",
      cursorwidth: "8px",
      cursorborder: "none",
      zindex: "999999"
    });
  });

  // swiper

  var swiper = new Swiper('.swiper-container',{
    slidesPerView: 6,
    spaceBetween: 0,
    pagination:{
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  

});
