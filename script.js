
$(function () {
  
  var saveBtnEl = $('.saveBtn');
  var present = parseInt(dayjs().format("H"));
  var today = dayjs();
  console.log(saveBtnEl);

 
  // display the day on top of the page
  $('#currentDay').text(today.format('dddd, MMM D, YYYY'));
  
  
  // check and setup the local storage
  var userInput;
  for (i = 9; i < 18; i++) {
    userInput = localStorage.getItem('hour-' + [i]);
    if (localStorage.getItem('hour-' + [i]) === null) {

      userInput = localStorage.setItem('hour-' + [i], '');
    }
    $("#hour-" + [i]).children("textarea").text(userInput);
  }




  // color is assign to each row according to current time
  function colorRow() {
    for (i = 9; i < 18; i++) {

      var hourList = parseInt(($("#hour-" + [i])).attr("id").split('-')[1])
      // console.log((($("#hour-" + [i])).attr("id").split('-')[1]))

      if (present < hourList) {
        $("#hour-" + [i]).children('textarea').addClass('future')
      } else if (present > hourList) {
        $("#hour-" + [i]).children('textarea').addClass('past')
      } else if (present === hourList) {
        $("#hour-" + [i]).children('textarea').addClass('present')
      }
    }
  };

 
//check and see which row was click and save the input
  saveBtnEl.on('click', function () {

    for (i = 9; i < 18; i++) { 
    
    comment = $(this).siblings('.description').val()
    
    var checkBlock = $(this).parent(".time-block").attr("id")
     
    var myEntry = $(this).parent().attr("id")
      
      checkBlock = myEntry

      console.log(myEntry);
      
      localStorage.setItem( myEntry, comment);
    }

  });
 
  // activate the function
  colorRow()
  
});


