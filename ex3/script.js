$(document).ready(function () {
  $("button").click(function () {
    $("#paragraph").text($("form").serialize());
  });
});
