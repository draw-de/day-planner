//Shows today's date and time
$("#date").text(moment().format("LLLL"));

//Save functions
function saveInput(){
    localStorage.setItem("9AM",$("#input9AM").val())
    localStorage.setItem("10AM",$("#input10AM").val())
    localStorage.setItem("11AM",$("#input11AM").val())
    localStorage.setItem("12PM",$("#input12PM").val())
    localStorage.setItem("1PM",$("#input1PM").val())
    localStorage.setItem("2PM",$("#input2PM").val())
    localStorage.setItem("3PM",$("#input3PM").val())
    localStorage.setItem("4PM",$("#input4PM").val())
    localStorage.setItem("5PM",$("#input5PM").val())
}
  
  //Local storage
function savedInput(){
    $("#input9AM").val(localStorage.getItem("9AM"))
    $("#input10AM").val(localStorage.getItem("10AM"))
    $("#input11AM").val(localStorage.getItem("11AM"))
    $("#input12PM").val(localStorage.getItem("12PM"))
    $("#input1PM").val(localStorage.getItem("1PM"))
    $("#input2PM").val(localStorage.getItem("2PM"))
    $("#input3PM").val(localStorage.getItem("3PM"))
    $("#input4PM").val(localStorage.getItem("4PM"))
    $("#input5PM").val(localStorage.getItem("5PM"))
}