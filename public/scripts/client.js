/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
	const getTweet = search => {
		let tweet = {};
	};

	$(".flexForm").on("submit", function(event) {
    event.preventDefault();
    let text = $('#mainText').val();
		console.log("data", text);
    
    if (text.length > 140 || text === '') {
      $('#error').slideToggle('fast').delay( 500 ).slideUp('fast');       
    } else {
			$.ajax({
				url: "/tweets",
				data: $(this).serialize(),
				type: "POST",
				dataType: "JSON"
    })
    .then(loadTweets());    
    }
  });

 

  const escape =  function(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  const createTweetElement = function(tweet) {
    let date = new Date(tweet.created_at).toDateString();
    let heart = 'class=ui-icon-heart'
		const $tweets = `
    <article class='tweets'>
      <header class='nTweetHeader'>
        <div>
          <img class="nTweetAvatar" src="${tweet.user.avatars}">
          <span>${tweet.user.name}</span>
        </div>
        <a class='tweet-handle'>${tweet.user.handle}</a>
      </header>
      <span class='tweet-body'>${escape(tweet.content.text)}</span>
      <footer>
        <div class="tweet-age">${date}</div>
        <div class="nTweetIcon" class='tweet-icon'>
          <i class="fa fa-flag"></i>
          <i class="fa fa-heart"></i>
          <i class="fa fa-thumbs-up"></i>
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
			$(".tContainer").prepend($tweet);
		}
	};

	const loadTweets = function() {
		$.ajax({
			url: "/tweets",
			type: "GET",
			dataType: "JSON"
		}).then(data => {
      // console.log(data.reverse());
      console.log('tweet', data);
			renderTweets(data);
		});
	};

	loadTweets();

  $('#mainText').keyup(function(e){
    if(e.which === 13)
       $('#tweetButt').click();
  });

  $( "#nTweetTag" ).click(function() {
    $( "#form" ).slideDown( "fast", function() {
      $('#mainText').focus();
    })
  });
  
});
