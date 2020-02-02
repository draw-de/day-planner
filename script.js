//Shows today's date and time
$("#date").text(moment().format("LLLL"));

//input times
var input9AM = $("#input9AM");
var input10AM = $("#input10AM");
var input11AM = $("#input11AM");
var input12PM = $("#input12PM");
var input1PM = $("#input1PM");
var input2PM = $("#input2PM");
var input3PM = $("#input3PM");
var input4PM = $("#input4PM");
var input5PM = $("#input5PM");

//planner list
var list9AM = $("#9amList");
var list10AM = $("#10amList");
var list11AM = $("#11amList");
var list12PM = $("#12pmList");
var list1PM = $("#1pmList");
var list2PM = $("#2pmList");
var list3PM = $("#3pmList");
var list4PM = $("#4pmList");
var list5PM = $("#5pmList");

//planner to dos
var toDo9AM = ["Get milk"];
var toDo10AM = ["Go to work"];
var toDo11AM = ["Work"];
var toDo12PM = ["Lunch"];
var toDo1PM = ["Back to work"];
var toDo2PM = ["Break"];
var toDo3PM = ["Go home"];
var toDo4PM = ["Chill"];
var toDo5PM = ["Get dinner"];

//others
var plannerForm = $("planner-form");
