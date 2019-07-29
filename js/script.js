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
    if (name !== "" || email !== "" || message !== "") {
      alert(name + " we have received your message. Thank you for reaching out to us.");
    }
    else {
      alert("fill the form!");
    }
    come.preventDefault();
  });
});
// $(document).ready(function(){

// });

$("#project").mouseout(function () {
  $("#project >h2").hide();
  $("#project >p").hide();

})
$("#project").mouseover(function () {
  $("#project >h2").show();
  $("#project >p").show();
});

$("#project1").mouseout(function () {
  $("#project1 >h2").hide();
  $("#project1 >p").hide();
})
$("#project1").mouseover(function () {
  $("#project1 >h2").show();
  $("#project1 >p").show();
});


$("#project2").mouseout(function () {
  $("#project2 >h2").hide();
  $("#project2 >p").hide();
})
$("#project2").mouseover(function () {
  $("#project2 >h2").show();
  $("#project2 >p").show();
});

$("#project3").mouseout(function () {
  $("#project3 >h2").hide();
  $("#project3 >p").hide();
})
$("#project3").mouseover(function () {
  $("#project3 >h2").show();
  $("#project3 >p").show();
});


$("#project4").mouseout(function () {
  $("#project4 >h2").hide();
  $("#project4 >p").hide();
})
$("#project4").mouseover(function () {
  $("#project4 >h2").show();
  $("#project4 >p").show();
});

$("#project5").mouseout(function () {
  $("#project5 >h2").hide();
  $("#project5 >p").hide();
})
$("#project5").mouseover(function () {
  $("#project5 >h2").show();
  $("#project5 >p").show();
});

$("#project6").mouseout(function () {
  $("#project6 >h2").hide();
  $("#project6 >p").hide();
})
$("#project6").mouseover(function () {
  $("#project6 >h2").show();
  $("#project6 >p").show();
});

$("#project7").mouseout(function () {
  $("#project7 >h2").hide();
  $("#project7 >p").hide();
})
$("#project7").mouseover(function () {
  $("#project7 >h2").show();
  $("#project7 >p").show();
});



















