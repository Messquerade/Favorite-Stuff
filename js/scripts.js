$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    let arrayInput = [$("#food").val(), $("#animal").val(), $("#flower").val(), $("#name").val()];
    let faveArray = []
    faveArray.push(arrayInput[0], arrayInput[1], arrayInput[2]);

    $("#faveList").append("<li>" + faveArray[0] + "</li>");
    $("#faveList").append("<li>" + faveArray[1] + "</li>");
    $("#faveList").append("<li>" + faveArray[2] + "</li>");
    // "<li>faveArray[0]</li>"
  });
});