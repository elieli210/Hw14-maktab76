/************CSS STYLES************/

$(".container").css({
  "background-color": "rgb(124, 206, 238)",
  width: "300px",
  height: "300px",
  "margin-left": "490px",
  "margin-top": "100px",
});

$("p").css({
  color: "white",
  text: "bold",
  "font-weight": "bold",
  "padding-top": "40px",
  display: "block",
  "text-align": "center",
});

$("#output").css({
  marginLeft: "40px",
});

$("#inputs").css({
  display: "flex",
  justifyContent: "center",
});

/************ADD && REMOVE************/

$(document).ready(function () {
  $("button").click(function () {
    let value = $("input").val();
    $(".container #output").append(
      `<p id="paragraph" style="border: 1px solid black;background-color: white;width:210px;">${value}</p>`
    );
  });
  $("#output").click(function () {
    $("#paragraph").remove();
  });
});
