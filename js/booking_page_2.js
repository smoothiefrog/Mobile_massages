/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-06-23 19:17:22
 * @version $Id$
 */
$(document).ready(function(){
	 $(".head-background").hide();
 	$(".times-circle-o").hide();
 	var flag=0;
 	$(".navbar-toggle").click(function() {
 		$(".navbar-toggle").css("background-color","#fff");

 		if(flag==0) {
 			$(".navbar").css("width","75%");
 			$(".navbar").css("margin-left","25%");

 			$(".head-title").css("margin-left","-15%");
 			$(".head-title-left").before("<h6>MENU</h6>");
 			$(".head-background").show();
 			flag=1;
 		}
 		else if(flag==1) {
 			flag=0;
 			$(".navbar").css("width","100%");
 			$(".navbar").css("margin-left","0%");
 			$(".navbar").css("height","0%");
 			$(".head-title").css({"margin-left":"10%"});
 			$("h6").remove();
 			$(".head-background").hide();
 		}
 	});
	$(".therapist_img").click(function(){
		  $(".therapist_img").css({"border":"none","margin":"0"});
          $(this).css({"border":"7px solid #64d2a3","margin":"0 -7px 0 -7px"});
        });
	$(".dropdown-menu li").click(function(){
		  $(this).children("span").show();
		  // $(".booking_options_select").html($(this).html());
		  $(this).parent().parent().children("button").html($(this).html());
		  $(this).children("span").hide();
    
        });

	$(".therapist_1").click(function(){
		  $(".therapist_intro").hide();
          $(".therapist_intro_1").show();
        });
	$(".therapist_2").click(function(){
		  $(".therapist_intro").hide();
          $(".therapist_intro_2").show();
        });
	$(".therapist_3").click(function(){
		  $(".therapist_intro").hide();
          $(".therapist_intro_3").show();
        });
	$(".therapist_4").click(function(){
		  $(".therapist_intro").hide();
          $(".therapist_intro_4").show();
        });
	$(".therapist_5").click(function(){
		  $(".therapist_intro").hide();
          $(".therapist_intro_5").show();
        });
	$(".therapist_6").click(function(){
		  $(".therapist_intro").hide();
          $(".therapist_intro_6").show();
        });
	$(".therapist_7").click(function(){
		  $(".therapist_intro").hide();
          $(".therapist_intro_7").show();
        });
	$(".therapist_8").click(function(){
		  $(".therapist_intro").hide();
          $(".therapist_intro_8").show();
        });
	
});