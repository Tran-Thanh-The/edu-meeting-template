let columns = 3;

function start() {
  headerSlide(3);
  coursesSlide(4);
  getWidthScreen();
  toggleDocs();
  toggleMenu();
  toggleShowListSub();
}

start();

function toggleShowListSub() {
  $('.has-sub').click(function() {
    $(this).toggleClass('show-list-sub');
  })
}

function toggleMenu() {
  $('.nav-list-container .btn').click( function() {
    $('.nav-list-container').toggleClass('clicked');
  })
}

function getWidthScreen() {
  window.onresize = function() {
    if (window.innerWidth <= 992) {
      columns = 2;
    }
    else {
      columns = 3;
    }
  }
}

function headerSlide() {
  $('.header-content .slide-list').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
}

function coursesSlide() {
  $('.our-courses .slide-list').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
}

// function handleHeader() {
//   if (window.screenY >= 30)
//     console.log('ok');
// }

function toggleDocs() {
  $('.docs-list .item').click(function(e) {
    $('.docs-list .item').each(function(item) {
      $(this).removeClass('active');
    })
    $(this).addClass('active');
    // console.log(this.height())
    // const height = $(this).height()-58;
    // $('.docs-list .active p').attr("height", "200px");
  })
}

$(window).scroll(function() {
  var hT = $('#first').offset().top,
    hH = $('#first').outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
  if (wS > (hT+hH-wH)){
    $('.header').addClass('new-header');
  } else {
    $('.header').removeClass('new-header');
  }
});