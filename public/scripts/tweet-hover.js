/* jshint esversion: 6 */

$(document).ready(() => {
  $(".tweet").on("mouseenter mouseleave", () => {
    $(event.currentTarget).find(".share").toggleClass("visible");
  });
});
