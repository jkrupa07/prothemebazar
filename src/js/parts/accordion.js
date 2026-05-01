export class Accordion {
  init() {
    this.Accordion();
  }
  Accordion() {
    $(document).ready(function () {
      // Open the first child by default
      $('.closet-header').first().addClass('active').next('.closet-content').slideDown();

      // Handle click events for closet headers
      $('.closet-header').click(function () {
        $(this).toggleClass('active').next('.closet-content').slideToggle();
        $('.closet-header').not(this).removeClass('active').next('.closet-content').slideUp();
      });
    });
  }
}

$(document).ready(function () {

  $(".faq-question").click(function () {

    let answer = $(this).next(".faq-answer");

    // Close others
    $(".faq-answer").not(answer).slideUp();
    $(".faq-question").not(this).removeClass("active");

    // Toggle current
    $(this).toggleClass("active");
    answer.slideToggle();

  });

});