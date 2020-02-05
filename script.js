//Shows today's date and time
$("#date").text(moment().format("LLLL"));

//Making a variable to grab the time of the hour from moment.js
var time = moment().format("H");

//This is just to check the time variable
console.log(time);

// If statements to check if it's in that certain time block

//You're grabbing each input then doing a callback function for element
$("input").each(function(index, element) {
  //Grabbing the times attribute from the input
  var hour = $(this).attr("hour");

  //Making an if statement saying if time of the hour is greater than attribute number then make it turn red
  if (time > parseInt(hour)) {
    $(this).css("background-color", "#f5d7d9");
  }
  //Similar to the first if statement, but just making it equal to the attribute number to turn it green.
  if (time == parseInt(hour)) {
    $(this).css("background-color", "#d0e3c8");
  }
  if (time < parseInt(hour)) {
    $(this).css("background-color", "#f0dfb4");
  }
});

//Save functions
$(".save").on("click", function() {
  $("input").each(function() {
    var id = $(this).attr("id");
    var value = $(this).val();
    localStorage.setItem(id, value);
  });
});

//Loads the saved values
function savedInput() {
  $("input").each(function() {
    var id = $(this).attr("id");
    $(this).val(localStorage.getItem(id));
  });
}
