$(document).ready(function() {
  $("#formOne").submit(function(event) {

    var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"]

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

    // var person1Input = $("input#person1").val();
    // $(".person1").text(person1Input);

    $("#story").show();

    event.preventDefault();
  });
});
