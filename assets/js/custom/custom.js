jQuery(document).ready(function(){



/**
 01 DASHBOARD JS
  
*/

// Accordion JS Stake Dashboard

$(".stake .accordion").each(function(a,b) {
    
$(b).click(function(){


    if ($(b).hasClass('active')==true) {

       
        
        
    }else{

            $(".stake .accordion").each(function(c,d) {
                $(d).css("color","#8095A9");

                if(a==c){
                $(d).css("color","#D39F1E");
                }               

            });


    $(".stake  .accordion").removeClass("active");
	$(".stake  .accordion").parent().removeClass("dropped");
	$(".stake  .accordion").parent().find(".panel").css({"display":"none"});

    $(b).toggleClass("active");
	$(b).parent().toggleClass("dropped");
	$(b).parent().find(".panel").slideToggle();

}




});


});



// Social Icons Follow

$(".follow-pd-staking").hover(function() {
    
    $(".follow-pd-staking-social").css({"right":"0"});


});


$('body').click(function(){
    $(".follow-pd-staking-social").css({"right":"-70px"});
});


$('span.close').click(function(){

    //Landing Page
    $('.menu').css({"left":"-480px"});

    //Stake Dashboard
    $('.navigations').css({"display":"none"});
    $('.navigation-container').css({"height":"70px"});




});

// Hamburger

$('.hamburger').click(function(){

    //Landing Page
    $('.menu').css({"left":"0"});

    // Stake Dashboard
    // $('.navigations').css({"display":"block"});
    $('.navigations').css({"display":"block"});
    $('.navigation-container').css({"height":"100vh"});


});


// Theme Switcher
$("img.switcher").click(function(){
    // $("img.switcher").css({"width":0});

    $("img.switcher").toggleClass(' theme');

    // setTimeout(function() {
        if ($("img.switcher").hasClass('theme')) {//Ligth Theme

            $("img.switcher").attr("src","../../assets/img/dark-light.svg");

            $(".navigation-container").css("background","#F8F9FA");
            $("body").css("background","#F8F9FA");
            $(".footer-dashboard").css("background","#F8F9FA");
            $(".header").css("background","#F8F9FA");
            $(".widget:not(.widget-4)").css("background","#ffffff");
            $("h4.value").css("color","#001529");
            $(".total-users h6").css("color","#042E56");
            $(".total-users h5").css("color","#001529");
            $(".total-deposit h6").css("color","#042E56");
            $(".total-deposit h5").css("color","#001529");
            $(".claim div h2").css("color","#001529");
            $(".top-min").css("color","#001529");
            $(".top-max").css("color","#001529");
            $(".bottom-min").css("color","#001529");
            $(".bottom-max").css("color","#001529");

            $(".balance h2").css("color","#001529");
            $(".stakes").css("background","#ffffff");
            $(".stake").css("background","#E6EAEE");
            $("button.accordion").css("background","#E6EAEE");
            // $("button.accordion.active").css("color","#001529");
            $(".hamburger>svg>path").css("fill","#001529");
            $("span.close").css("color","#001529");

            // if ($("button.accordion.active::after')) 
            // $("button.accordion.active").css("color","#001529");
            // } else {
            // $("button.accordion.active").css("color","#8095A9");
                
            // }
            // $("button.accordion").css("color","#8095A9");
            $("span.dashboard").css("color","#3A416F");
            $("span.icon-bg").css("background","#ffffff");
            $("span.icon-bg>svg>path").css("fill","#3A416F");
            $(".navigation-container div.navigations .support").css("background",'linear-gradient(135deg, #FFF 0%, #ffffff 100%)');
            $(".navigation-container div.navigations .support h2").css("color",'#001529');
            $(".navigation-container div.navigations .support .doc h6").css("color",'#001529');
            $(".navigation-container div.navigations .support .doc").css("background",'#f8f8f8');
            $(".navigation-container div.navigations .support h4").css("color",'#001529');
            $(".investor-stake").css("border",'6px solid #CCD5DD');
            $(".investor-stake table").css("background",'#ffffff');
            $(".investor-stake table .button,.stake-button").css("background-image",'linear-gradient(135deg, #001B36 0%, #08447C 100%)');
            $(".investor-stake table .button,.stake-button").css("color",'#fff');
            $(".stake-button").css("border",'none');
            // $("button.accordion").css("background","#8095A9");
            // $("button.accordion.active").css("color","#d5a323");

            $(".investor-stake table th").css("color",'#67748E');
            $(".investor-stake table tr").css("background",'#ffffff');
            $(".stake-value").css("background",'#ffffff');
            $(".stake-value").css("border",'1px solid #CCD5DD');//#E6EAEE
            $(".buy-input").css("background",'#E6EAEE');




             

            $(".investor-stake table tr").each(function(a,b){
              
                $(b).hover(function(){
                    $(b).css("background","#E6EAEE");
                },
                function(){
                    $(b).css("background","#ffffff");
                }
                );
            });

            $("div.navigations-item").each(function(a,b){
              
                $(b).hover(function(){
                    $(b).css("background","#ffffff");
                    $(b).css("color","#001529");
                    $(b).parent().css("color","#001529");

                    if(a===4){//My Account
                        $(b).css("background","transparent"); 
                    } 
                    

                },
                function(){
                    $(b).css("background","transparent");
                    $(b).css("color","#67748E");
                    $(b).parent().css("color","#67748E");

                    if(a===4){//My Account
                        $(b).css("background","transparent"); 
                    } 
                }
                );
            });


      


        }else{//Dark Theme

              $("img.switcher").attr("src","../../assets/img/light-dark.svg");

            $("body").css("background","#001529");
            $(".navigation-container").css("background","#001529");
            $(".footer-dashboard").css("background","#001529");
            $(".header").css("background","#001529");

            $(".widget").css("background","#002B53");
            $("h4.value").css("color","#ffffff");
            $(".total-users h6").css("color","#CECECE");
            $(".total-users h5").css("color","#CECECE");
            $(".total-deposit h6").css("color","#CECECE");
            $(".total-deposit h5").css("color","#CECECE");
            $(".claim div h2").css("color","#ffffff");
            $(".buy-input").css("background",'#3c5e7e');


            $(".top-min").css("color","#fff");
            $(".top-max").css("color","#fff");
            $(".bottom-min").css("color","#fff");
            $(".bottom-max").css("color","#fff");


            $(".widget").css("box-shadow",'0 18.2554 24.6448 rgba(0, 0, 0, 0.05)');
            $(".stakes").css("background","#002B53");
            $(".stake").css("background","#001B36");
            $(".balance h2").css("color","#ffffff");
            $(".hamburger>svg>path").css("fill","#ffffff");
            $("span.close").css("color","#ffffff");



            $("button.accordion").css("background","#001B36");
            $("span.dashboard").css("color","#f9f9f94a");
            // $("button.accordion").css("color","#8095A9");

            $("span.icon-bg").css("background","#002B53");
            $("span.icon-bg>svg>path").css("fill","#67748E");

            $(".navigation-container div.navigations .support").css("background",'linear-gradient(135deg, #002B53 0%, #627594 100%)');
            $(".navigation-container div.navigations .support h2").css("color",'#fff');
            $(".navigation-container div.navigations .support .doc h6").css("color",'#fff');
            $(".navigation-container div.navigations .support .doc").css("background",'#67748E');
            $(".navigation-container div.navigations .support h4").css("color",'#fff');
            $(".investor-stake").css("border",'6px solid #001529');
            $(".investor-stake table").css("background",'#001B36');
            $(".investor-stake table .button,.stake-button").css("color",'#002B53');
          
            $(".investor-stake table .button,.stake-button").css("background-image",'linear-gradient(to right, #DEA909, #D09410, #E3CF5C)');
            $(".investor-stake table tr").css("background",'#001B36');
            $(".investor-stake table th").css("color",'#E1CFA0');
            $(".stake-value").css("background",'#002B53');
            // $(".follow-pd-staking").css("background",'#001B36');
            // $(".follow-pd-staking").css("color",'#');
            $(".stake-value").css("border",'1px solid #F0B90B');
       



            $(".investor-stake table tr").each(function(a,b){
              
                $(b).hover(function(){
                    $(b).css("background","#001529");
                },
                function(){
                    $(b).css("background","#001b36");
                }
                );
            });



            $("div.navigations-item").each(function(a,b){
              
                $(b).hover(function(){
                    $(b).css("background","#8095A9");
                    $(b).css("color","#ffffff");
                    $(b).parent().css("color","#001529");

                    if(a===4){//My Account
                        $(b).css("background","transparent"); 
                    } 
                },
                function(){
                    $(b).css("background","transparent");
                    $(b).css("color","#67748E");
                    $(b).parent().css("color","#67748E");

                    if(a===4){//My Account
                        $(b).css("background","transparent"); 
                    } 

                }
                );
            });






    
        }   
    // },1000)

   
} 
);






/**
 02 HOMAGEPAGE JS
  
*/

// AOS JS
AOS.init();


/**
 03 HOMAGEPAGE JS
  
*/
// Accordion JS Homepage FAQs

$(".faq .accordion").each(function(a,b) {
    
    $(b).click(function(){
    
    
        if ($(b).hasClass('active')==true) {
            
        }else{
    
        $(".faq  .accordion").removeClass("active");
        $(".faq  .accordion").parent().removeClass("dropped");
        $(".faq  .accordion").parent().find(".panel").css({"display":"none"});
    
        $(b).toggleClass("active");
        $(b).parent().toggleClass("dropped");
        $(b).parent().find(".panel").slideToggle();
    
    }
    
    });
    
    
    });

    });