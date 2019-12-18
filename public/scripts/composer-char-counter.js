$(document).ready(function() {
  // --- our code goes here ---
  $('.new-tweet').on('keyup', function(event){
    const counter = $('.counter');
    let charCount = $(event.target).val().length;
    let remainingCount = 140 - charCount;
    // console.log(this);
    counter.html(remainingCount);
    // console.log("dograts", counter)
    if (remainingCount < 0) {
      $(counter).css('color', 'red');
    } else {
      $(counter).css('color', 'black');
    }
  });

  console.log('loaded!');
});


// console.log(test);


