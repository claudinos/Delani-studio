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
    $("#three").hide();
    $("#four").show();
    
  });
  $("#four").click(function(){
    $("#four").hide();
    $("#three").show();
    
  });
});
$(document).ready(function(){
  $("#five").click(function(){
    $("#five").hide();
    $("#six").show();
    
  });
  $("#six").click(function(){
    $("#six").hide();
    $("#five").show();
    
  });
});