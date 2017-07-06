$(document).ready(function() {
  $("#survey").submit(function(event) {
    var nameInput = $("input#name").val();
    var foodInput = $("input:radio[name=food]:checked").val();
    var musicInput= $("#music").val();

    $(".name").text(nameInput);
    $(".food").text(foodInput);
    $(".music").text(musicInput);

      $("#yourResults").show();

    event.preventDefault();
  });
});
