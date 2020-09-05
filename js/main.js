$(document).ready(function () {

  function ibg(){

  let ibg=document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
  if(ibg[i].querySelector('img')){
  ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
  }
  }
  }

  ibg();

/*----our services hover changes*/
  $('.ourServices__row-col').on('mouseenter', function () {
    $(this).css('background', '#00897b');
    $(this).find('.ourServices__box-title, .ourServices__box-content, .ourServices__box-btn').css('color', '#ffffff');
    $(this).find('.ourServices__box-btn').css('border-color', '#ffffff');
    $(this).find('.phone-white').css('display', 'block');
    $(this).find('.phone-black').css('display', 'none');
  });

  $('.ourServices__row-col').on('mouseleave', function () {
    $(this).css('background', '#ffffff');
    $(this).find('.ourServices__box-title, .ourServices__box-content, .ourServices__box-btn').css('color', '#212121');
    $(this).find('.ourServices__box-btn').css('border-color', '#212121');
    $(this).find('.phone-white').css('display', 'none');
    $(this).find('.phone-black').css('display', 'block');
  });

/*Slick slider*/

$('.team__body').slick({
  dots: true,
  infinite: true,
  slidesToShow: 3,
/*  autoplay: true,*/
  arrows:false,
  dotsClass:'slick-dots',
  slidesToScroll: 3,
    responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});




/*----latest works section button switch img*/

  $('.latestWorks__btn-all').on('click',function () {
    $(this).css({'background-color':'#00897b', 'color': '#ffffff'});
    $('.latestWorks__btn-web, .latestWorks__btn-ux, .latestWorks__btn-mock').css({'background-color':'#ffffff', 'color': '#212121'});
  });

  $('.latestWorks__btn-web').on('click',function () {
    $(this).css({'background-color':'#00897b', 'color': '#ffffff'});
    $('.latestWorks__btn-all, .latestWorks__btn-ux, .latestWorks__btn-mock').css({'background-color':'#ffffff', 'color': '#212121'});
  });

  $('.latestWorks__btn-ux').on('click',function () {
    $(this).css({'background-color':'#00897b', 'color': '#ffffff'});
    $('.latestWorks__btn-all, .latestWorks__btn-web, .latestWorks__btn-mock').css({'background-color':'#ffffff', 'color': '#212121'});
  });

  $('.latestWorks__btn-mock').on('click',function () {
    $(this).css({'background-color':'#00897b', 'color': '#ffffff'});
    $('.latestWorks__btn-all, .latestWorks__btn-web, .latestWorks__btn-ux').css({'background-color':'#ffffff', 'color': '#212121'});
  });



/*$('.readmore-btn').on('click', function () {
  $(this).parent().toggleClass('showContent');

  var replaceText = $(this).parent().hasClass('showContent') ? "Read Less" : "Read More";
    $(this).text(replaceText);
  });

  $('.latestWorks-img-box:hidden').slice(0, 6).show(0, function () {
    $('.latestWorks_body_all-btn').on('click',function () {
      $('.btn-all').slice(0, 6).show();
    });

    $('.latestWorks_body_web-btn').on('click',function () {
      $('.btn-uxDesign, .btn-mokups').hide();
      $('.btn-webDesign').slice(0, 2).show();
    });

    $('.latestWorks_body_ux-btn').on('click',function () {
      $('.btn-webDesign, .btn-mokups').hide();
      $('.btn-uxDesign').slice(0, 2).show();
    });

    $('.latestWorks_body_mock-btn').on('click',function () {
      $('.btn-uxDesign, .btn-webDesign').hide();
      $('.btn-mokups').slice(0, 2).show();
    });
  });

  $('.latestWorks__view-all').on('click', function () {
  $(this).parent().toggleClass('showContent');

  var replaceText = $(this).parent().hasClass('showContent') ? "Read Less" : "Read More";
    $(this).text(replaceText);
  });*/

  $('.latestWorks__img-box:hidden').slice(0, 6).show(0, function () {
    $('.latestWorks__btn-all').on('click',function () {
      $('.btn-all').slice(0, 6).show();
    });

    $('.latestWorks__btn-web').on('click',function () {
      $('.btn-uxDesign, .btn-mokups').hide();
      $('.btn-webDesign').slice(0, 2).show();
    });

    $('.latestWorks__btn-ux').on('click',function () {
      $('.btn-webDesign, .btn-mokups').hide();
      $('.btn-uxDesign').slice(0, 2).show();
    });

    $('.latestWorks__btn-mock').on('click',function () {
      $('.btn-uxDesign, .btn-webDesign').hide();
      $('.btn-mokups').slice(0, 2).show();
    });
  });


  $('.latestWorks__view-all').on('click', function () {
    $(this).parent().toggleClass('showLatestWorks');

  var replaceText = $(this).parent().hasClass('showLatestWorks') ? "View Less" : "View All";
    $(this).text(replaceText);


    if ($(this).parent().hasClass('showLatestWorks')) {
          $('.latestWorks__view-all').css({'background-color':'#00897b', 'color':'#fff'});
          $('.latestWorks__img-box').hide();
          $('.latestWorks__img-box:hidden').slice(0, 600).show(0, function () {
             $('.latestWorks__btn-all').on('click',function () {
             $('.btn-uxDesign, .btn-mokups, .btn-webDesign').hide();
             $('.btn-all').slice(0, 600).show();
            });

            $('.latestWorks__btn-web').on('click',function () {
              $('.btn-uxDesign, .btn-mokups').hide();
              $('.btn-webDesign').slice(0, 200).show();
            });

            $('.latestWorks__btn-ux').on('click',function () {
              $('.btn-webDesign, .btn-mokups').hide();
              $('.btn-uxDesign').slice(0, 200).show();
            });

            $('.latestWorks__btn-mock').on('click',function () {
              $('.btn-uxDesign, .btn-webDesign').hide();
              $('.btn-mokups').slice(0, 200).show();
            });
          });

    } else {
          $('.latestWorks__view-all').css({'background-color':'transparent', 'color':'#212121'});
        $('.latestWorks__img-box').hide();
        $('.latestWorks__img-box:hidden').slice(0, 6).show(0, function () {
          $('.latestWorks__btn-all').on('click',function () {
            $('.btn-uxDesign, .btn-mokups, .btn-webDesign').hide();
            $('.btn-all').slice(0, 6).show();
          });

          $('.latestWorks__btn-web').on('click',function () {
            $('.btn-uxDesign, .btn-mokups, .btn-all').hide();
            $('.btn-webDesign').slice(0, 2).show();
          });

          $('.latestWorks__btn-ux').on('click',function () {
            $('.btn-webDesign, .btn-mokups, .btn-all').hide();
            $('.btn-uxDesign').slice(0, 2).show();
          });

          $('.latestWorks__btn-mock').on('click',function () {
            $('.btn-uxDesign, .btn-webDesign, .btn-all').hide();
            $('.btn-mokups').slice(0, 2).show();
          });
        });
    }
});
/*button more view blog*/
  $('.blog__body-row').hide();
  $('.blog__body-row:hidden').slice(0, 3).show();

  $('.blog__more-view').on('click', function () {
    $(this).parent().toggleClass('blog__show-btn');

  var replaceText = $(this).parent().hasClass('blog__show-btn') ? "Less View" : "More View";
    $(this).text(replaceText);


    if ($(this).parent().hasClass('blog__show-btn')) {


          $('.blog__body-row:hidden').slice(0, 600).show(1000);

    } else {

          $('.blog__body-row').slice(3, 600).hide(1000);
    }
  });



$(".navbar-toggler").on("click", function () {
    $(this).toggleClass('babai');
});

});









/*//Navbar color scroll function
function consoleBG() {
  if ($(window).scrollTop() < 100 && $(window).width() >= '768') {
    $('.navbar-default').css('background', 'none');
    $('#myNavbar .nav li a').css('color', 'white');
    $('.header-logo1').hide();
    $('.header-logo2').show();
  } else if ($(window).scrollTop() < 100 && $(window).width() < '768') {
    $('.navbar-default').css('background', 'white');
    $('#myNavbar .nav li a').css('color', 'black');
    $('.header-logo2').hide();
    $('.header-logo1').show();
  }else if ($(window).scrollTop() > 100 && $(window).width() < '768') {
    $('.navbar-default').css('background', 'white');
    $('#myNavbar .nav li a').css('color', 'black');
    $('.header-logo2').hide();
    $('.header-logo1').show();
  } else if ($(window).scrollTop() > 100 && $(window).width() >= '768') {
    $('.navbar-default').css('background', 'white');
    $('#myNavbar .nav li a').css('color', 'black');
    $('.header-logo2').hide();
    $('.header-logo1').show();
   
  }
}
consoleBG();

$(window).scroll(function() {
  consoleBG();
});


$(window).on('load resize',consoleBG);*/


// scrollspy smooth scrolling
$('body').scrollspy({target: ".navbar", offset: 50});
$(".nav-item a").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
      window.location.hash = hash;
    });
  }
});

