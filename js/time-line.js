jQuery(document).ready(function () {
  //Timeline 1
  jQuery('.carrusel-timeline').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.carrusel-years',
    appendArrows: '.flechas-timeline',
  });
  jQuery('.carrusel-years').slick({
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.carrusel-timeline',
    dots: false,
    focusOnSelect: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 979,
        settings: {
          slidesToShow: 3,
          vertical: true,
        }
      },
    ]
  });
  jQuery('.carrusel-years').on('afterChange', function (event, slick, currentSlide) {
    var CurrentSlideDom = $(slick.$slides.get(currentSlide)).text();
    jQuery(".timeline-block .text-year").text(CurrentSlideDom);
});

  //Timeline 2

  jQuery('.slick-timeline').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slick-years',
    appendArrows: '.arrows-timeline',
  });
  jQuery('.slick-years').slick({
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slick-timeline',
    dots: false,
    focusOnSelect: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          vertical: true,
        }
      },
    ]
  });

  jQuery('.slick-years').on('afterChange', function (event, slick, currentSlide) {
    var CurrentSlideDom = jQuery(slick.$slides.get(currentSlide)).find(".year").text();
    var CurrentSlideText = jQuery(slick.$slides.get(currentSlide)).find("h3").text();
    jQuery(".timeline-block .text-year .year").text(CurrentSlideDom);
    jQuery(".timeline-block .text-year h3").text(CurrentSlideText);
  });
})