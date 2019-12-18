/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  $(".tweet").on("submit", function(event) {
   
    $(".tContainer").append($tweet);
	});


  const tweetData = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

const createTweetElement = function(tweet) {
  let date = new Date(tweet.created_at).toDateString();
  const $tweets = `
    <article class='tweets'>
      <header>
        <img src="${tweet.user.avatars}">
        ${tweet.user.name}
      <a class='tweet-handle'>${tweet.user.handle}</a>
      </header>
      <span class='tweet-body'>${tweet.content.text}</span>
      <footer>
        <div class="tweet-age">${date}</div>
        <div class='tweet-icon'>
          <i class="fa fa-flag"></i>
          <i class="fa fa-heart"></i>
          <i class="fa fa-refresh"></i>
        </div>
      </footer>
    </article>
  `;
  return $tweets;
};


const renderTweets = function(tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  for (let x of tweets) {
    let $tweet = createTweetElement(x);
    $('.tContainer').append($tweet);
  }
}




renderTweets(tweetData);


// const $tweet = createTweetElement(tweetData);
// Test / driver code (temporary)


});