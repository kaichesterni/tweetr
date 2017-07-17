window.onload = () => {
  $(".tweet").on("mouseenter mouseleave", () => {
    $(event.currentTarget).find(".share").toggleClass("visible");
  });
};
