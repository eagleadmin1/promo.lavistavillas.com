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

$('#burger').click(function() {
    $('#burger').toggleClass("activated");
    $('body').toggleClass('body-overflow-hidden');
    $('#tablet-menu').toggleClass('show');
});

$('#tablet-menu .lvv-nav-item, #tablet-menu .lvv-btn-accent, .tablet-menu-overlay').click(function() {
    $('#burger').toggleClass("activated");
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
    imagesLoaded: true,
    arrowShape: { 
        x0: 25,
        x1: 60, y1: 50,
        x2: 70, y2: 50,
        x3: 35
    },
    on: {
      ready: function () {
        $('#lvv-location-carousel').removeClass('loading');
        $('#lvv-location-carousel').resize();
      },
    },
});

$('#lvv-development-progress').flickity({
  cellAlign: 'center',
  contain: true,
  wrapAround: true,
  pageDots: false,
  selectedAttraction: 0.02,
  imagesLoaded: true,
  arrowShape: { 
    x0: 15,
    x1: 55, y1: 40,
    x2: 65, y2: 30,
    x3: 35
  },
  on: {
    ready: function () {
      $('#lvv-development-progress').removeClass('loading');
      $('#lvv-development-progress').resize();
    },
  },
});

$('.lvv-villas-carousel-1').flickity({
    cellAlign: 'center',
    contain: true,
    wrapAround: true,
    autoPlay: 4000,
    imagesLoaded: true,
    lazyLoad: 1,
    arrowShape: { 
      x0: 15,
      x1: 55, y1: 40,
      x2: 65, y2: 30,
      x3: 35
    }
});

setTimeout( () => {
  $('.lvv-villas-carousel-2').flickity({
    cellAlign: 'center',
    contain: true,
    wrapAround: true,
    autoPlay: 4000,
    imagesLoaded: true,
    lazyLoad: 1,
    arrowShape: { 
      x0: 15,
      x1: 55, y1: 40,
      x2: 65, y2: 30,
      x3: 35
    }
  });
}, 500);

setTimeout( () => {
  $('.lvv-villas-carousel-3').flickity({
    cellAlign: 'center',
    contain: true,
    wrapAround: true,
    autoPlay: 4000,
    imagesLoaded: true,
    lazyLoad: 1,
    arrowShape: { 
      x0: 15,
      x1: 55, y1: 40,
      x2: 65, y2: 30,
      x3: 35
    }
  });
}, 1000);

setTimeout( () => {
  $('.lvv-villas-carousel-4').flickity({
    cellAlign: 'center',
    contain: true,
    wrapAround: true,
    autoPlay: 4000,
    imagesLoaded: true,
    lazyLoad: true,
    arrowShape: { 
      x0: 15,
      x1: 55, y1: 40,
      x2: 65, y2: 30,
      x3: 35
    }
  });
}, 1500);

$('a[data-modal]').click(function(event) {
  $(this).modal({
    blockerClass: "lvv-contact-form-overlay", 
    modalClass: "lvv-contact-form-modal",
    showClose: false,
    fadeDuration: 400
  });
  $('.lvv-header').removeClass('lvv-header-up').addClass('lvv-header-down');
  return false;
});

$('#lvv-videoblock-btn-paly').click(function() {
  $(this).hide();
  $('#lvv-videoblock-iframe').toggleClass('show');
  $('.lvv-videoblock-bg').addClass('show');
  $('#lvv-videoblock-iframe')[0].contentWindow.postMessage(
    '{"event":"command","func":"playVideo","args":""}',
    "*"
  );
});

$(".accordion__title").on("click", function(e) {
  e.preventDefault();
  var $this = $(this);
  if (!$this.hasClass("accordion-active")) {
    $(".accordion__content").slideUp(400);
    $(".accordion__title").removeClass("accordion-active");
  }
  $this.toggleClass("accordion-active");
  $this.next().slideToggle();
});

$(document).ready(function () {

  jQuery.validator.addMethod("phone", function(phone_number, element) {
      phone_number = phone_number.replace(/\s+/g, "");

      return this.optional(element) || phone_number.match(/^(\s*)?(\+)?([-()]?\d[-()]?){9,14}(\s*)?$/);
  }, '');

  const rules = {
      name: {
          required: true,
      },
      phone: {
          phone: true,
          required: true,
      },
      phone2: {
        number: true,
    },
      email: {
          email: true,
          required: true,
      }
  }

  const getUrlParameter = function getUrlParameter(sParam) {
      var sPageURL = window.location.search.substring(1),
          sURLVariables = sPageURL.split('&'),
          sParameterName,
          i;
  
      for (i = 0; i < sURLVariables.length; i++) {
          sParameterName = sURLVariables[i].split('=');
  
          if (sParameterName[0] === sParam) {
              return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
          }
      }
      return '';
  };

  function ajaxRequest (formId, sourceForm, downloadPdf = false) {
      return(
          $.ajax({
              type: 'POST',
              headers: {
                  'Content-Type':'application/json'
              },
              url: 'https://dwh.villacarte.com/api/lead/create',
              data: JSON.stringify(
                  {
                      name: $(`${formId} input[name=name]`).val(),
                      email: $(`${formId} input[name=email]`).val(),
                      phone: $(`${formId} input[name=phone]`).val(),
                      language: $(`${formId} input[name=language]`).val(),

                      utmSource: getUrlParameter('utm_source'),
                      utmCampaign: getUrlParameter('utm_campaign'),
                      utmContent: getUrlParameter('utm_content'),
                      utmMedium: getUrlParameter('utm_medium'),
                      utmTerm: getUrlParameter('utm_term'),

                      sourcePage: window.location.href,
                      sourceForm: sourceForm,

                      botcheck: $(`${formId} input[name=phone2]`).val(),
                  }
              ),
              success() {
                  $(`${formId} .cf-step-1`).hide();
                  $(`${formId} .cf-step-2`).show();

                  if(downloadPdf) {
                      var link = document.createElement('a');
                      link.href = $(`${formId} input[name=pdfUrl]`).val();
                      link.download = $(`${formId} input[name=pdfName]`).val();
                      link.click();
                  }
             
                  ym(90929167,'reachGoal','submitted')
                  gtag('event', 'Отправка формы', 
                      { 
                          'event_category': 'Form', 
                          'event_action': 'submitted', }
                  ); 
              },
          })
      )
  }

  $('#cf-top').validate({
      errorPlacement: function() {},
      rules,
      submitHandler: function() {
          ajaxRequest('#cf-top', 'Top form');
      }
  });

  $('#cf-top-mobile').validate({
      errorPlacement: function() {},
      rules,
      submitHandler: function() {
          ajaxRequest('#cf-top-mobile', 'Top form modal');
      }
  });

  $('#cf-middle').validate({
      errorPlacement: function() {},
      rules,
      submitHandler: function() {
          ajaxRequest('#cf-middle', 'Middle form modal');
      }
  });

  $('#cf-bottom').validate({
      errorPlacement: function() {},
      rules,
      submitHandler: function() {
          ajaxRequest('#cf-bottom', 'Bottom form', true);
      }
  });
  
  $('#cf-bottom-mobile').validate({
      errorPlacement: function() {},
      rules,
      submitHandler: function() {
          ajaxRequest('#cf-bottom-mobile', 'Bottom form modal', true);
      }
  });

});