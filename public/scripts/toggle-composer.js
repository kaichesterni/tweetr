$(document).ready(() => {
  $("#nav-bar").find("button").on("click", () => {
    $(".new-tweet").slideToggle();
    $(".new-tweet-text").trigger("select");
  });
});
