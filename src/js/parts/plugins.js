import "slick-carousel";

export class Plugins {

  init() {
    this.ReviewSlider();
  }

  ReviewSlider() {
    $('.review-slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.review-slider-nav'
    });
    $('.review-slider-nav').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.review-slider-for',
      dots: false,
      arrows: true,
      focusOnSelect: true,
      prevArrow: ".review-section .prev-arrow",
      nextArrow: ".review-section .next-arrow",
    });
  }
}