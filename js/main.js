$(document).ready(function () {


function ibg(){

 $.each($('.ibg'), function(index, val) {
    if($(this).find('img').length>0){
      $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
    }
  });
}

ibg();

  var readMoreHtml = $('.photodiary-content-readmore').html();
  var lessText = readMoreHtml.substr(0, 300);
  if (readMoreHtml.length > 300) {
    $('.photodiary-content-readmore').html(lessText).append("<a href='' class='read-more-link'> Show more</a>");
  }else{
    $('.photodiary-content-readmore').html(readMoreHtml);
  }

  $("body").on("click", ".read-more-link", function (event) {
    event.preventDefault();
    $(this).parent(".photodiary-content-readmore").html(readMoreHtml).append("<a href='' class='show-less-link'> Show less</a>")
  })

  $("body").on("click", ".show-less-link", function (event) {
   event.preventDefault();
   $(this).parent(".photodiary-content-readmore").html(readMoreHtml.substr(0, 300)).append("<a href='' class='read-more-link'> Show more</a>")
  })

});




//Navbar color scroll function
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



$(window).on('load resize',consoleBG);


// scrollspy smooth scrolling
$('body').scrollspy({target: ".navbar", offset: 50});
$("#myNavbar a").on('click', function(event) {
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

