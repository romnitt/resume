$(document).ready(function(){
    
    
    // Main Slider
    $('.slider').slick({
        arrows: false,
        infinite: false,
        //prevArrow: false,
        //nextArrow: $('a.next'),
        adaptiveHeight: true,
        speed: 500,
        swipe: false
    });
    
    
    $("nav ul li a").click(function(e){
        var slideIndex = $(this).parent().index();
        $( ".slider" ).slick('slickGoTo', parseInt(slideIndex));
    });

    $('.slider').on('setPosition', function () {
        var currentSlide =  $('.slider').slick('slickCurrentSlide');
        $("nav ul li a").removeClass("active");
        $("nav ul li a").filter(function (index) {
            return index === currentSlide;
        }).addClass("active");
    });

    $("nav ul li a, a.next").click(function(){
        $("html, body").animate({ scrollTop: 0 }, 0);
        return false;
    });
    
    
    
    
    $("a#slide-resume").click(function(){
                
        $(".nav-progress").animate({
            
            width: '33.33%'
            
        }, 500, 'swing', function(){});
        
    });
        
    
    
    $("a#slide-careers").click(function(){
        
        $(".slider").slick('slickGoTo', 1);
        
        $(".nav-progress").animate({
            
            width: '66.66%'
            
        }, 500, 'swing', function(){});
        
    });
    
    
    $("a#slide-facts").click(function(){
                
        $(".nav-progress").animate({
            
            width: '100%'
            
        }, 500, 'swing', function(){});
        
    });
    

    //////////
    
    
     $("#next-careers").click(function(){
        
        $(".slider").slick('slickGoTo', 1);

        $(".nav-progress").animate({

            width: '66.66%'

        }, 500, 'swing', function(){});
         
        $("html, body").animate({ scrollTop: 0 }, 0);
        return false;
        
    });
    
    
    $("#next-facts").click(function(){
        
        $(".slider").slick('slickGoTo', 2);

        $(".nav-progress").animate({

            width: '100%'

        }, 500, 'swing', function(){});
         
        $("html, body").animate({ scrollTop: 0 }, 0);
        return false;
        
    });
    
    
    
     
    
    ////////////////////
    
    
    // Comment Slider
    $('.comment-slider').slick({
        arrows: false,
        infinite: false,
        adaptiveHeight: true,
        speed: 200,
        variableWidth: true,
        centerMode: true
    });
    
    
    // Comments
    
    $("#com1").click(function(){
        
        $(".comment-slider").slick('slickGoTo', 0);
        
    });
    
    $("#com2").click(function(){
        
        $(".comment-slider").slick('slickGoTo', 1);
        
    });
    
    
    
    // Comment Triggers
    
    $(".comment").click(function(){
        
        $("#comments-bcg").fadeIn(200);
         
        $(".open-comments").css({ height: 450 });
            
        setTimeout(function(){
            
            
            $(".comment-slider").animate({

                top: 50

            }, 200, 'swing', function(){});
            
            
            setTimeout(function(){
                
                $("#close-comments").animate({
                    
                    bottom: 0
                    
                }, 200, 'swing', function(){});
                
            }, 200);

                    
        }, 200);
                     
     });
    
    
    
    $("#close-comments").click(function(){
        
        
        $("#close-comments").animate({
                    
            bottom: -30
                    
        }, 200, 'swing', function(){});
        
        
        setTimeout(function(){
        
            $(".comment-slider").animate({

                top: 400

            }, 200, 'swing', function(){});
        
        }, 200);
        
        
        setTimeout(function(){
            
            $(".open-comments").css({ height: 0 });
            $("#comments-bcg").fadeOut(200);
            
        }, 400);
        
        
    });
    
    
    
    
    
    ////////////////////
    
    
    // Swipe nav
    $('.swipenav').slick({
        arrows: false,
        infinite: false,
        speed: 500,
        variableWidth: true,
    });
    
    
    
    ////////////////////
    
    
    // Rotator
    $(".rotate").textrotator({
        
        animation: "flipUp", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
        separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
        speed: 2000 // How many milliseconds until the next word show.
    });
 
    

});