$(document).ready(function() {
  $("#show").click(function(event){
    event.preventDefault();
   $(".form-inline").show();
   $("#show").hide();
  });

	  $("#sub").click(function(event){
        event.preventDefault();

        
       var inputtedname = $("#name").val();
       var inputtedimage = $("#imageinput").val();
       $(".empty").append("<p>" + inputtedimage + inputtedname +"<button>"+"</button>"+ "</p>");
       });

       $("#adan ").click(function(event){
        event.preventDefault();
        $(".audio").show();
        $("#adan").hide();
       });

       $("#ahmed").click(function(event){
        event.preventDefault();
        $(".audio1").show();
        $("#ahmed").hide();
      });
      
      $("#alvin").click(function(event){
        event.preventDefault();
        $(".audio2").show();
        $("#alvin").hide();
      });
      $("#boyd").click(function(event){
        event.preventDefault();
        $(".audio3").show();
        $("#boyd").hide();
      });
      $("#catherine").click(function(event){
        event.preventDefault();
        $(".audio4").show();
        $("#catherine").hide();
      });
      $("#eric").click(function(event){
        event.preventDefault();
        $(".audio5").show();
        $("#eric").hide();
      });
      $("#james").click(function(event){
        event.preventDefault();
        $(".audio6").show();
        $("#james").hide();
      });
      $("#john").click(function(event){
        event.preventDefault();
        $(".audio7").show();
        $("#john").hide();
      });
      $("#leslie").click(function(event){
        event.preventDefault();
        $(".audio8").show();
        $("#leslie").hide();
      });
      $("#mary").click(function(event){
        event.preventDefault();
        $(".audio9").show();
        $("#mary").hide();
      });
      $("#mujahid").click(function(event){
        event.preventDefault();
        $(".audio10").show();
        $("#mujahid").hide();
      });
      $("#nombs").click(function(event){
        event.preventDefault();
        $(".audio11").show();
        $("#nombs").hide();
      });
      $("#netwon").click(function(event){
        event.preventDefault();
        $(".audio12").show();
        $("#newton").hide();
      });
      $("#owen").click(function(event){
        event.preventDefault();
        $(".audio13").show();
        $("#owen").hide();
      });
      $("#pauline").click(function(event){
        event.preventDefault();
        $(".audio14").show();
        $("#pauline").hide();
      });
      $("#rita").click(function(event){
        event.preventDefault();
        $(".audio15").show();
        $("#rita").hide();
      });
      $("#peter").click(function(event){
        event.preventDefault();
        $(".audio16").show();
        $("#peter").hide();
      });
      $("#sotonye").click(function(event){
        event.preventDefault();
        $(".audio17").show();
        $("#sotonye").hide();
      });
      $("#susan").click(function(event){
        event.preventDefault();
        $(".audio18").show();
        $("#susan").hide();
      });
      $("#simon").click(function(event){
        event.preventDefault();
        $(".audio19").show();
        $("#simon").hide();
      });




});