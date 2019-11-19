$(document).ready(function () {
  setTimeout(function () {
    $('.categories__cats').hide();
  }, 75)

})

$('.frontpage__slider').slick({
  arrows: false,
  dots: true,
  infinite: false,
})

$('.js-hero-carousel').slick({
  arrows: false,
  dots: true,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
})

$('.article__slider').slick({
  arrows: false,
  dots: true,
  prevArrow: '<button class="article__slider--prev"><svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31"><g><g><path fill="#bf9e7c" d="M15.5 30.492c-8.271 0-15-6.728-15-14.998C.5 7.221 7.23.49 15.5.49c8.272 0 15.002 6.731 15.002 15.004 0 8.27-6.73 14.998-15.003 14.998zm0-28.731C7.93 1.76 1.77 7.922 1.77 15.494c0 7.57 6.158 13.727 13.728 13.727 7.572 0 13.732-6.157 13.732-13.727 0-7.572-6.16-13.733-13.732-13.733zm7.362 14.366H9.808l4.943 4.943a.635.635 0 1 1-.898.898l-6.027-6.026a.633.633 0 0 1-.138-.695.638.638 0 0 1 .138-.205l6.027-6.028a.635.635 0 1 1 .898.898l-4.943 4.944h13.054a.635.635 0 1 1 0 1.27z" /></g></g></svg></button>',
  nextArrow: '<button class="article__slider--next"><svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31"><g><g><path fill="#bf9e7c" d="M15.5.508c8.271 0 15 6.728 15 14.997 0 8.274-6.729 15.004-15 15.004C7.229 30.51.499 23.78.499 15.505.498 7.235 7.228.508 15.501.508zm0 28.73c7.57 0 13.729-6.16 13.729-13.733 0-7.57-6.158-13.727-13.728-13.727-7.573 0-13.733 6.157-13.733 13.727 0 7.572 6.16 13.734 13.733 13.734zM8.139 14.874h13.054L16.25 9.93a.635.635 0 0 1 .898-.899l6.027 6.027a.63.63 0 0 1 .187.45.632.632 0 0 1-.187.45l-6.027 6.027a.634.634 0 1 1-.898-.898l4.943-4.944H8.138a.635.635 0 1 1 0-1.27z" /></g></g></svg></button>',
  infinite: false,
})

$('.cats__carousel--front').slick({
  arrows: true,
  dots: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  prevArrow: '<button class="cats__btn cats__btn--left"><svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31"><g><g><path fill="#998a7a" d="M15.5 30.492c-8.271 0-15-6.728-15-14.998C.5 7.221 7.23.49 15.5.49c8.272 0 15.002 6.731 15.002 15.004 0 8.27-6.73 14.998-15.003 14.998zm0-28.731C7.93 1.76 1.77 7.922 1.77 15.494c0 7.57 6.158 13.727 13.728 13.727 7.572 0 13.732-6.157 13.732-13.727 0-7.572-6.16-13.733-13.732-13.733zm7.362 14.366H9.808l4.943 4.943a.635.635 0 1 1-.898.898l-6.027-6.026a.633.633 0 0 1-.138-.695.638.638 0 0 1 .138-.205l6.027-6.028a.635.635 0 1 1 .898.898l-4.943 4.944h13.054a.635.635 0 1 1 0 1.27z" /></g></g></svg></button>',
  nextArrow: '<button class="cats__btn cats__btn--right"><svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31"><g><g><path fill="#998a7a" d="M15.5.508c8.271 0 15 6.728 15 14.997 0 8.274-6.729 15.004-15 15.004C7.229 30.51.499 23.78.499 15.505.498 7.235 7.228.508 15.501.508zm0 28.73c7.57 0 13.729-6.16 13.729-13.733 0-7.57-6.158-13.727-13.728-13.727-7.573 0-13.733 6.157-13.733 13.727 0 7.572 6.16 13.734 13.733 13.734zM8.139 14.874h13.054L16.25 9.93a.635.635 0 0 1 .898-.899l6.027 6.027a.63.63 0 0 1 .187.45.632.632 0 0 1-.187.45l-6.027 6.027a.634.634 0 1 1-.898-.898l4.943-4.944H8.138a.635.635 0 1 1 0-1.27z" /></g></g></svg></button>',
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
})

$('.cats__carousel--dropdown').slick({
  arrows: true,
  dots: false,
  infinite: false,
  slidesToShow: 8,
  slidesToScroll: 1,
  prevArrow: '<button class="cats__btn cats__btn--left"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15"><g><g><path fill="#b3a18f" d="M1.138 6.873h13.054L9.25 1.93a.635.635 0 1 1 .898-.899l6.027 6.027a.63.63 0 0 1 .187.45.632.632 0 0 1-.187.45l-6.027 6.027a.634.634 0 1 1-.898-.898l4.943-4.944H1.138a.635.635 0 1 1 0-1.27z"/></g></g></svg></button>',
  nextArrow: '<button class="cats__btn cats__btn--right"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15"><g><g><path fill="#b3a18f" d="M1.138 6.873h13.054L9.25 1.93a.635.635 0 1 1 .898-.899l6.027 6.027a.63.63 0 0 1 .187.45.632.632 0 0 1-.187.45l-6.027 6.027a.634.634 0 1 1-.898-.898l4.943-4.944H1.138a.635.635 0 1 1 0-1.27z"/></g></g></svg></button>',
  responsive: [{
      breakpoint: 1170,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
})




$('.partners__carousel').slick({
  arrows: true,
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<button class="partners__btn partners__btn--left"><svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31"><g><g><path fill="#998a7a" d="M15.5 30.492c-8.271 0-15-6.728-15-14.998C.5 7.221 7.23.49 15.5.49c8.272 0 15.002 6.731 15.002 15.004 0 8.27-6.73 14.998-15.003 14.998zm0-28.731C7.93 1.76 1.77 7.922 1.77 15.494c0 7.57 6.158 13.727 13.728 13.727 7.572 0 13.732-6.157 13.732-13.727 0-7.572-6.16-13.733-13.732-13.733zm7.362 14.366H9.808l4.943 4.943a.635.635 0 1 1-.898.898l-6.027-6.026a.633.633 0 0 1-.138-.695.638.638 0 0 1 .138-.205l6.027-6.028a.635.635 0 1 1 .898.898l-4.943 4.944h13.054a.635.635 0 1 1 0 1.27z" /></g></g></svg></button>',
  nextArrow: '<button class="partners__btn partners__btn--right"><svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31"><g><g><path fill="#998a7a" d="M15.5.508c8.271 0 15 6.728 15 14.997 0 8.274-6.729 15.004-15 15.004C7.229 30.51.499 23.78.499 15.505.498 7.235 7.228.508 15.501.508zm0 28.73c7.57 0 13.729-6.16 13.729-13.733 0-7.57-6.158-13.727-13.728-13.727-7.573 0-13.733 6.157-13.733 13.727 0 7.572 6.16 13.734 13.733 13.734zM8.139 14.874h13.054L16.25 9.93a.635.635 0 0 1 .898-.899l6.027 6.027a.63.63 0 0 1 .187.45.632.632 0 0 1-.187.45l-6.027 6.027a.634.634 0 1 1-.898-.898l4.943-4.944H8.138a.635.635 0 1 1 0-1.27z" /></g></g></svg></button>',
  responsive: [{
      breakpoint: 550,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
})


$('.product-page__slider--full').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.product-page__slider--thumbnail',

});
$('.product-page__slider--thumbnail').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: '.product-page__slider--full',
  dots: false,
  arrows: false,
  centerMode: false,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 10,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 667,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 460,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
  ]
});

$('.category__discounts').slick({
  arrows: false,
  dots: false,
  infinite: false,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
});



$('.top__support').click(function () {
  var button = $(this);
  if (button.hasClass('top__support--expanded')) {
    button.removeClass('top__support--expanded');
    $('.support__dropdown').hide();
    $('.overlay').fadeOut();
  } else {
    button.addClass('top__support--expanded');
    $('.support__dropdown').show();
    $('.overlay').fadeIn();
  }
})

if (window.matchMedia("(min-width: 768px)").matches) {
  $('.search__input').keyup(function () {
    var value = $(this).val();
    if (value.length > 0) {
      $('.search__results').show();
      $('.search__submit').addClass('search__submit--active');
      $('.header__search').addClass('header__search--expanded');
      $('.search__submit').hide();
      $('.search__close').show();
      $('.overlay').fadeIn(250);
    } else {

      $('.search__results').hide();
      $('.search__submit').removeClass('search__submit--active');
      $('.header__search').removeClass('header__search--expanded');
      $('.search__submit').show();
      $('.search__close').hide();
      $('.overlay').fadeOut(250);
    }

  })

  $('.search__close').click(function () {
    $('.search__results').hide();
    $('.search__submit').removeClass('search__submit--active');
    $('.header__search').removeClass('header__search--expanded');
    $('.search__submit').show();
    $('.search__close').hide();
    $('.overlay').fadeOut(250);
  })

  $(".categories__dropright").hover(
    function () {
      $(this).find('.categories__links--sublevel').show();
      $(this).addClass('active');
      $(this).addClass('active');
    },
    function () {
      $(this).find('.categories__links--sublevel').hide();
      $(this).removeClass('active');
    }
  );

  $('.js-categories-dropdown').click(function (e) {
    e.preventDefault();
    var button = $(this);
    if (button.hasClass('categories__dropdown--expanded')) {
      button.removeClass('categories__dropdown--expanded');
      $(this).parent().removeClass('header__categories--expanded');
      $(this).parent().find('.categories__links').not('.categories__links--sublevel').slideUp();
      $('.overlay').fadeOut();
    } else {
      button.addClass('categories__dropdown--expanded');
      $(this).parent().addClass('header__categories--expanded');
      $(this).parent().find('.categories__links').not('.categories__links--sublevel').slideDown();
      $('.overlay').fadeIn();
    }

  });


  $('.overlay').click(function () {
    $('.search__results').fadeOut();
    $('.support__dropdown').hide();
    $('.overlay').fadeOut(250);
    $('.categories__links').not('.categories__links--sublevel').hide();
    $('.top__support').removeClass('top__support--expanded');
    $('.categories__dropdown').removeClass('categories__dropdown--expanded');
    $('.search__submit').removeClass('search__submit--active');
    $('.header__search').removeClass('header__search--expanded');

  })

}

if (window.matchMedia("(max-width: 768px)").matches) {

  $('.overlay').click(function () {
    $('.mobile__sidebar').css({
      'left': '-120%'
    });
    $('.overlay').fadeOut(250);
    $('html').css({
      'overflow': 'auto'
    });
    $('.mobile__close').fadeOut(200);
    $('.mobile__search').hide();
  })
}

if (window.matchMedia("(min-width: 768px)").matches) {

  $('.recommendations__link').click(function () {
    $('.recommendations__filters .filters__tag:nth-of-type(n+4)').toggle();
    $(this).toggleClass('recommendations__link--expanded');
  })
}

$('.crossale__subheading').click(function () {
  $(this).parent().find('.crossale__dropdown').slideToggle();
  $(this).parent().toggleClass('crossale__category--expanded');
})

$('.tabs__link').click(function (e) {
  e.preventDefault();
  var target = $(this).attr('href');
  $('.tabs__link').removeClass('tabs__link--active');
  $(this).addClass('tabs__link--active');

  $('.tabs__pane').removeClass('tabs__pane--active');
  $(target).addClass('tabs__pane--active');

})

$(".collection__item").hover(
  function () {
    $(this).find('.collection__drop').show();
    $(this).addClass('collection__item--expanded');
  },
  function () {
    $(this).find('.collection__drop').hide();
    $(this).removeClass('collection__item--expanded');
  }
);

$('.faq__item').click(function (e) {
  $(this).toggleClass('faq__item--expanded');
  $(this).find('.faq__answer').slideToggle(200);

})

$('.specifications__expand').click(function () {
  $('.specifications__hidden').slideToggle(250);
  $('.specifications__table').toggleClass('specifications__table--hidden');
  $(this).toggleClass('specifications__expand--expanded');
});

$('.specifications__table--hidden').click(function () {
  $('.specifications__hidden').slideToggle(250);
  $('.specifications__table').toggleClass('specifications__table--hidden');
  $(this).toggleClass('specifications__expand--expanded');
});




$('.review__expand').click(function () {
  var container = $(this).parents().eq(1);
  $(this).toggleClass('review__expand--expanded');
  container.toggleClass('is-expanded');
  container.find('.review__text').toggleClass('review__text--opacity');
  container.find('.review__text--hidden').slideToggle();
})


var range = $(".filters__range"),
  input1 = $(".filters__input--from"),
  input2 = $(".filters__input--to"),
  instance;


range.ionRangeSlider({
  type: "double",
  min: 0,
  max: 30000,
  from: 0,
  to: 15000,
  hide_min_max: true,
  hide_from_to: true,
  onStart: function (data) {
    input1.prop("value", data.from);
    input2.prop("value", data.to);
  },
  onChange: function (data) {
    input1.prop("value", data.from);
    input2.prop("value", data.to);
  }
});

instance = range.data("ionRangeSlider");

input1.on("change keyup", function () {
  var val = $(this).prop("value");

  // validate
  if (val < 0) {
    val = 0;
  } else if (val > 30000) {
    val = 30000;
  }

  instance.update({
    from: val
  });
});

input2.on("change keyup", function () {
  var val = $(this).prop("value");

  // validate
  if (val < 0) {
    val = 0;
  } else if (val > 30000) {
    val = 30000;
  }

  instance.update({
    to: val
  });
});

$('.filters__heading--dropdown').click(function () {
  $(this).parent().find('.filters__dropdown').slideToggle();
  $(this).parent().toggleClass('filters__block--expanded');
})

$('.filters__scroll').overlayScrollbars({});

$('.categories__links--mobile .categories__link--parent').click(function () {
  $(this).parent().find('.categories__links--sublevel').animate({
    'left': '0'
  }, 200);
})

$('.categories__link--back').click(function () {
  $(this).parent().animate({
    'left': '-100%'
  }, 200);
})

$('.mobile__toggler').click(function () {
  $('.mobile__sidebar').css({
    'left': '0'
  });
  $('.overlay').fadeIn(250);
  $('html').css({
    'overflow': 'hidden'
  });
  $('.mobile__close').fadeIn(200);
})

$('.mobile__close').click(function () {
  $('.mobile__sidebar').css({
    'left': '-120%'
  });
  $('.overlay').fadeOut(250);
  $('html').css({
    'overflow': 'auto'
  });
  $(this).fadeOut(200);
})



$('.category__btn--filters').click(function () {
  $('.category__sidebar').animate({
    'left': 0
  }, 250);
})

$('.sidebar__close').click(function () {
  $('.category__sidebar').animate({
    'left': '-100%'
  }, 250);
})



$(".compare__items").mousewheel(function (event, delta) {

  this.scrollLeft -= (delta * 30);

  event.preventDefault();

});

$('.mobile__search-btn').click(function () {
  $('.mobile__search').show();
  $('.overlay').fadeIn(250);
})

$('.sidebar__expand--ordering').click(function () {
  $('.sidebar__ordering').css({
    'left': 0
  });
});

$('.sidebar__back--ordering').click(function () {
  $('.sidebar__ordering').css({
    'left': '-110%'
  });
});

$('.sidebar__expand--features').click(function () {
  $('.category__features').css({
    'left': 0
  });
});

$('.sidebar__back--features').click(function () {
  $('.category__features').css({
    'left': '-110%'
  });
});

$('.recommendations__expand').click(function () {
  $('.recommendations__inner').toggle();
  $(this).toggleClass('recommendations__expand--expanded');
})