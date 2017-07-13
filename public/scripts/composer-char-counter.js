$(document).on("ready", () => {
  const $composer = $(".new-tweet-text");
  const $counter = $(".counter");

  $composer.on("input", (event) => {
    let val = 140 - $composer.val().length;
    $counter.text(val);
    if (val < 0) {
      $counter.addClass("warning");
    } else {
      $counter.removeClass("warning");
    }
  });
});
