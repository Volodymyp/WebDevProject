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

