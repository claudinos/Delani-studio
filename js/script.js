$(document).ready(function () {
  $("#one").click(function () {
    $("#two").show();
    $("#one").hide();

  });
  $("#two").click(function () {
    $("#one").show();
    $("#two").hide();

  });
});
$(document).ready(function () {
  $("#three").click(function () {
    $("#four").show();
    $("#three").hide();

  });
  $("#four").click(function () {
    $("#three").show();
    $("#four").hide();

  });
  $("#five").click(function () {
    $("#six").show();
    $("#five").hide();

  });
  $("#six").click(function () {
    $("#five").show();
    $("#six").hide();

  });
  $("#submit").click(function (come) {
    var name = $("#name").val()
    var email = $("#email").val()
    var message = $("#message").val();
    if ((name !== "") || (email !== "") || (message !== "")) {
      alert(name + " we have received your message. Thank you for reaching out to us.");
    }
    else {
      alert("fill the form!" );
    }
    come.preventDefault();
  });
});
// $(document).ready(function(){

// });
