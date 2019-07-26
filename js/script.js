$(document).ready(function(){
  $("#one").click(function(){
    $("#two").show();
    $("#one").hide();
    
  });
  $("#two").click(function(){
    $("#one").show();
    $("#two").hide();
    
  });
});
$(document).ready(function(){
  $("#three").click(function(){
    $("#four").show();
    $("#three").hide();
    
  });
  $("#four").click(function(){
    $("#three").show();
    $("#four").hide();
    
  });
});
$(document).ready(function(){
  $("#five").click(function(){
    $("#six").show();
    $("#five").hide();
    
  });
  $("#six").click(function(){
    $("#five").show();
    $("#six").hide();
    
  });
});
$("#kabiri").submit(function(event){
  var name=("input#name").val()
  var email=("input#email").val()
  var message=$.trim($("#message").val());
  if((name!=="")||(email!=="")||(message!=="")){
    alert("fill the form!");
  }
  else{
    alert(name+"we have received your message. Thank you for reaching out to us. ")
  }
  event.preventDefault();
});