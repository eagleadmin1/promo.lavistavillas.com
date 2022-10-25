// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.lvv-header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.lvv-header').removeClass('lvv-header-down').addClass('lvv-header-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.lvv-header').removeClass('lvv-header-up').addClass('lvv-header-down');
        }
    }
    
    lastScrollTop = st;
}

// smooth scroll to link
$(function() {
  $('a.lvv-nav-item[href*="#"]').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
              $('html, body').animate({
                  scrollTop: target.offset().top
              }, 500);
              return false;
          }
      }
  });
});

// hover container lang menu
$('.lang').hover(
  function(){
      $('.lang ul').stop().slideToggle(100);
  },
  function(){
      $('.lang ul').stop().slideToggle(100);  
  }
);

// click languages
$('.lang ul li').on('click', function(){
    //select lang and apply changes
    $lang = $(this).text();
    $('.lang .current-lang').text($lang);
});

$('#hamburger').click(function() {
    $('body').toggleClass('body-overflow-hidden');
    $(this).toggleClass('is-active');
    $('#tablet-menu').toggleClass('show');
});

$('#tablet-menu .lvv-nav-item').click(function() {
    $('#hamburger').toggleClass('is-active');
    $('#tablet-menu').toggleClass('show');
    $('body').toggleClass('body-overflow-hidden');
});

$('#collapse-title-1').click(function(){
  $(this).toggleClass('show');
  $('.collapse-item-1').slideToggle('slow');
});

var scene = document.getElementById('scene-1');
var parallaxInstance1 = new Parallax(scene);

var scene = document.getElementById('scene-2');
var parallaxInstance2 = new Parallax(scene);

// --------------------------------------------------------

Flickity.createMethods.push('_createPrevNextCells')
Flickity.prototype._createPrevNextCells = function() {
  this.on( 'select', this.setPrevNextCells )
}
Flickity.prototype.setPrevNextCells = function() {
  // remove classes
  changeSlideClasses( this.previousSlide, 'remove', 'is-previous' )
  changeSlideClasses( this.nextSlide, 'remove', 'is-next' )
  // set slides
  if (this.selectedIndex - 1 < 0) {
    this.previousSlide = this.slides[ this.slides.length - 1 ]
  }
  else {
    this.previousSlide = this.slides[ this.selectedIndex - 1 ]
  }
  if (this.selectedIndex + 1 === this.slides.length) {
    this.nextSlide = this.slides[0]
  }
  else {
    this.nextSlide = this.slides[this.selectedIndex + 1]
  }
  // add classes
  changeSlideClasses( this.previousSlide, 'add', 'is-previous' )
  changeSlideClasses( this.nextSlide, 'add', 'is-next' )
}
function changeSlideClasses( slide, method, className ) {
  if (!slide) {
    return
  }
  slide.getCellElements().forEach( function( cellElem ) {
    cellElem.classList[ method ]( className )
  })
}

$('#lvv-location-carousel').flickity({
    cellAlign: 'center',
    contain: true,
    wrapAround: true,
    pageDots: false,
    selectedAttraction: 0.02,
    arrowShape: { 
        x0: 25,
        x1: 60, y1: 50,
        x2: 70, y2: 50,
        x3: 35
    }
});

$('.lvv-villas-carousel').flickity({
    cellAlign: 'center',
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
});

$('a[data-modal]').click(function(event) {
  $(this).modal({
    blockerClass: "lvv-contact-form-overlay", 
    modalClass: "lvv-contact-form-modal",
    showClose: false
  });
  $('.lvv-header').removeClass('lvv-header-up').addClass('lvv-header-down');
  return false;
});