$(function () {
  // Get the current date and display it in the header
  var currentDate = dayjs().format('dddd, MMMM D');
  $('#currentDay').text(currentDate);
  
  // TODO: Add a listener for click events on the save button.
  $('.saveBtn').on('click', function () {
      var userInput = $(this).siblings('.description').val(); //gets the user input from the corresponding textarea
      var timeBlockId = $(this).parent().attr('id'); //gets the time-block id
      localStorage.setItem(timeBlockId, userInput); //saves the user input in local storage using the time-block ID as a key
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour.
  $('.time-block').each(function () {
    var currentHour = dayjs().hour();
    var blockHour = parseInt($(this).attr('id').split('-')[1]); //splits hour and time and converts time into interger, calls second value in array which is the time
    console.log(currentHour);
    if (blockHour < currentHour) { //removes classes and adds new ones to recolor calendar
        $(this).removeClass('present future').addClass('past');
    } else if (blockHour === currentHour) {
        $(this).removeClass('past future').addClass('present');
    } else {
        $(this).removeClass('past present').addClass('future');
    }
});

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements.
  $('.time-block').each(function () {
      var timeBlockId = $(this).attr('id');
      var storedInput = localStorage.getItem(timeBlockId);
      if (storedInput) {
          $(this).children('.description').val(storedInput);
      }
  });
});
