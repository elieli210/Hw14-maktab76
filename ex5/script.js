$(document).ready(function () {
  $("button").click(() => {
    $.ajax({
      type: "GET",
      url: "https://62c5a798a361f725128b0f8b.mockapi.io/users",

      contentType: "application/json",
      dataType: "json",
      success: function (datas) {
        $.each(datas, function (index, data) {
          $(".container #output").append(
            `<p>First name:${data.firstName}  , Last name:${data.lastName} , Persoanl is:${data.PersonalId}</p>`
          );
        });
      },
    });
  });
});
