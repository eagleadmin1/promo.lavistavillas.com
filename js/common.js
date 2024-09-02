// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.lvv-header').outerHeight();

$(window).scroll(function(event) {
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
  if (Math.abs(lastScrollTop - st) <= delta)
    return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    $('.lvv-header').removeClass('lvv-header-down').addClass('lvv-header-up');
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
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
  function() {
    $('.lang ul').stop().slideToggle(100);
  },
  function() {
    $('.lang ul').stop().slideToggle(100);
  }
);

// click languages
$('.lang ul li').on('click', function() {
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

$('#collapse-title-1').click(function() {
  $(this).toggleClass('show');
  $('.collapse-item-1').slideToggle('slow');
});

var scene = document.getElementById('scene-1');
var parallaxInstance1 = new Parallax(scene);

var scene = document.getElementById('scene-2');
var parallaxInstance2 = new Parallax(scene);

// --------------------------------------------------------

Flickity.createMethods.push('_createPrevNextCells');

Flickity.prototype._createPrevNextCells = function() {
  this.on('select', this.setPrevNextCells);
};

Flickity.prototype.setPrevNextCells = function() {
  // remove classes
  changeSlideClasses(this.previousSlide, 'remove', 'is-previous');
  changeSlideClasses(this.secondPreviousSlide, 'remove', 'is-previous');
  changeSlideClasses(this.nextSlide, 'remove', 'is-next');
  changeSlideClasses(this.secondNextSlide, 'remove', 'is-next');

  // set slides
  var len = this.slides.length;
  this.secondPreviousSlide = this.slides[(this.selectedIndex - 2 + len) % len];
  this.previousSlide = this.slides[(this.selectedIndex - 1 + len) % len];
  this.nextSlide = this.slides[(this.selectedIndex + 1) % len];
  this.secondNextSlide = this.slides[(this.selectedIndex + 2) % len];

  // add classes
  changeSlideClasses(this.secondPreviousSlide, 'add', 'is-previous');
  changeSlideClasses(this.previousSlide, 'add', 'is-previous');
  changeSlideClasses(this.nextSlide, 'add', 'is-next');
  changeSlideClasses(this.secondNextSlide, 'add', 'is-next');
};

function changeSlideClasses(slide, method, className) {
  if (!slide) {
    return;
  }
  slide.getCellElements().forEach(function(cellElem) {
    cellElem.classList[method](className);
  });
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
    x1: 60,
    y1: 50,
    x2: 70,
    y2: 50,
    x3: 35
  },
  on: {
    ready: function() {
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
    x1: 55,
    y1: 40,
    x2: 65,
    y2: 30,
    x3: 35
  },
  on: {
    ready: function() {
      $('#lvv-development-progress').removeClass('loading');
      $('#lvv-development-progress').resize();
    },
  },
});

$('.lvv-villas-carousel').flickity({
  cellAlign: 'center',
  contain: true,
  wrapAround: true,
  autoPlay: 4000,
  imagesLoaded: true,
  lazyLoad: 1,
  arrowShape: {
    x0: 15,
    x1: 55,
    y1: 40,
    x2: 65,
    y2: 30,
    x3: 35
  }
});

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

$(document).ready(function() {

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
    email: {
      email: true,
      required: true,
    }
  }

  const getUrlParameter = (sParam) => {
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

  // Получает Google Client ID из cookie
  const getGoogleClientID = () => {
    const match = document.cookie.match('(?:^|;)\\s*_ga=([^;]*)'); // Ищет значение _ga
    if (!match) return ''; // Если не найдено, возвращаем пустую строку

    const raw = decodeURIComponent(match[1]); // Декодируем значение cookie
    const clientIdMatch = raw.match(/(\d+\.\d+)$/); // Ищем клиентский ID в формате "GA1.2.xxxx.xxxx"

    return clientIdMatch ? clientIdMatch[1] : ''; // Возвращаем найденный ID или пустую строку
  };

  // Получает Yandex Client ID из cookie
  const getYandexClientID = () => {
    const match = document.cookie.match('(?:^|;)\\s*_ym_uid=([^;]*)'); // Ищет значение _ym_uid
    return match ? decodeURIComponent(match[1]) : ''; // Возвращает найденное значение или пустую строку
  };

  const ajaxRequest = (formId, downloadPdf = false) => {
    return $.ajax({
      type: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      url: 'https://layanverde.com/api/lead',
      data: JSON.stringify({
        leadOwner: 'Dinara',
        project: 'La Vista Villas',
        language: window.location.href.includes('ru') ? 'RU' : 'EN',
        sourcePage: window.location.href,
        sourceForm: 'main form',
        googleClientID: getGoogleClientID(),
        yandexClientID: getYandexClientID(),
  
        utmSource: getUrlParameter('utm_source'),
        utmCampaign: getUrlParameter('utm_campaign'),
        utmContent: getUrlParameter('utm_content'),
        utmMedium: getUrlParameter('utm_medium'),
        utmTerm: getUrlParameter('utm_term'),
  
        name: $(`${formId} input[name=name]`).val(),
        email: $(`${formId} input[name=email]`).val(),
        phone: $(`${formId} input[name=phone]`).val(),
      }),
      success() {
        $(`${formId} .cf-step-1`).hide();
        $(`${formId} .cf-step-2`).show();
  
        if (downloadPdf) {
          const link = document.createElement('a');
          link.href = $(`${formId} input[name=pdfUrl]`).val();
          link.download = $(`${formId} input[name=pdfName]`).val();
          link.click();
        }
  
        ym(90929167, 'reachGoal', 'submitted');
        gtag('event', 'Отправка формы', {
          'event_category': 'Form',
          'event_action': 'submitted',
        });
      },
    });
  }
  
  const setupFormValidation = (formId, downloadPdf = false) => {
    $(formId).validate({
      errorPlacement: function() {},
      rules,
      submitHandler: function() {
        ajaxRequest(formId, downloadPdf);
      }
    });
  }
  
  setupFormValidation('#cf-top');
  setupFormValidation('#cf-top-mobile');
  setupFormValidation('#cf-middle');
  setupFormValidation('#cf-bottom', true);
  setupFormValidation('#cf-bottom-mobile', true);

});