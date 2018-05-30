$(document).ready(function() {
  $("#shout").submit(function(event) {
    var shoutback = $("input#text").val();
    $(".text").text(shoutback);

    $("#holler").show();

    event.preventDefault();
  });
});
