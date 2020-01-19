$(document).ready(function() {
  // --- our code goes here ---
  $('.new-tweet').on('keyup', function(event){
    const counter = $('.counter');
    let charCount = $(event.target).val().length;
    let remainingCount = 140 - charCount;
    counter.html(remainingCount);
    if (remainingCount < 0) {
      $(counter).css('color', 'red');
    } else {
      $(counter).css('color', 'black');
    }
  });
});
