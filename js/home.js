/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-06-23 10:17:56
 * @version $Id$
 */

 $(init)
 function init() {
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
 	$(".nav-home").click(function() {  
      $("html,body").animate({  
        scrollTop: $(".home-top").offset().top 
      }, 200); 
    });
    $("html,body").animate({
    		scrollTop:$("#home-booking").offset().top
    	},200);
    $(".nav-therapist").click(function (){  
      $("html,body").animate({  
        scrollTop: $(".home-therapist").offset().top 
      }, 200); 
    }); 
    $(".nav-styles").click(function (){  
      $("html,body").animate({  
        scrollTop: $(".home-type").offset().top 
      }, 200); 
    }); 
    $(".nav-pricing").click(function (){  
      $("html,body").animate({  
        scrollTop: $(".home-pricing").offset().top 
      }, 200); 
    }); 
    $(".nav-faq").click(function (){  
      $("html,body").animate({  
        scrollTop: $(".home-faq").offset().top 
      }, 200); 
    }); 
    $(".nav-contact").click(function (){  
      $("html,body").animate({  
        scrollTop: $(".home-contact").offset().top 
      }, 200); 
    }); 

    
   
 	$("select").click(function() {
 		$("#_input").val($("#select option:selected").text());
 	});
 	
 }