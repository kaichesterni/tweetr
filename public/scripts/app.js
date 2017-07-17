// turn tweet into tweet objects
function createTweetElement(tweetData) {
  const user = tweetData.user;

  // create tweet
  const $tweet = $("<article>").addClass("tweet");

  // create header
  const $header = $("<header>");
  const $headerAvatar = $(`<img src="${user.avatars.regular}">`).addClass("avatar");
  const $headerH2 = $("<h2>").addClass("username").append(user.name);
  const $headerSpan = $("<span>").addClass("handle").append(user.handle);

  $header.append($headerAvatar).append($headerH2).append($headerSpan);

  // create content div
  const $div = $("<div>");
  const $contentP = $("<p>").addClass("content").append(tweetData.content.text);

  $div.append($contentP);

  // get date
  const timeStamp = new Date(tweetData.created_at).toString();
  const date = [];
  for (var i = 0; i < 15; i++) {
    date.push(timeStamp[i]);
  }
  date.join("");

  // create footer
  const $footer = $("<footer>");
  const $footerSpan = $("<span>").append(date);
  const $footerShare = $("<img src='/images/icons.png'>").addClass("share");

  $footer.append($footerSpan).append($footerShare);

  // append everything to tweet
  $tweet.append($header).append($div).append($footer);
  return $tweet;
}

// show tweet objects on page
function renderTweets(database) {
  $(".tweets").empty();
  for (let id in database) {
    const tweetElement = createTweetElement(database[id]);
    $(".tweets").prepend(tweetElement);
  }
}

// load tweet database
function loadDatabase() {
  $.ajax({
    url: "/tweets",
    type: "GET"
  }).done((data) => {
    renderTweets(data);
  });
}

// handle new tweets
function handleNewTweet(form) {
  const data = form.find(".new-tweet-text");
  if (!data.val()) {
    alert("Empty tweet!");
  } else if (data.val().length > 140) {
    alert("Tweet too long!");
  } else {
    $.ajax({
      url: "/tweets",
      type: "POST",
      data: data.serialize()
    }).done(() => {
      data.val("");
      loadDatabase();
    });
  }
}

$(document).ready(() => {
  // load and display tweets
  loadDatabase();

  // handle new tweets
  const $form = $(".new-tweet").find("form");
  $form.on("submit", (event) => {
    event.preventDefault();
    handleNewTweet($form);
  });
});
