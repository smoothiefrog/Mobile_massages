/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-06-30 14:02:03
 * @version $Id$
 */

 $(init)
 function init() {
 	$(".head-background").hide();
 	var flag=0;
 	$(".nav > li > a").click(function(){ 
 		for(i=0;i<8;i++) {
 			$(".nav > li > a").eq(i).css("background-color","white");
 		}
 		$(this).css("background-color","rgba(255,255,255,0.8)");
 	});

 	$(".navbar-toggle").click(function() 
 	{
 		$(".navbar-toggle").css("background-color","#fff");
 		if(flag==0) 
 		{
 			$(".navbar").css("width","75%");
 			$(".navbar").css("margin-left","25%");

 			$(".head-title").css("margin-left","-15%");
 			$(".head-title-left").before("<h6>MENU</h6>");
 			$(".head-background").show();
 			flag=1;
 		}
 		else if(flag==1) 
 		{
 			flag=0;
 			$(".navbar").css("width","100%");
 			$(".navbar").css("margin-left","0%");
 			$(".navbar").css("height","0%");
 			$(".head-title").css({"margin-left":"10%"});
 			$("h6").remove();
 			$(".head-background").hide();
 		}
 	});
 }