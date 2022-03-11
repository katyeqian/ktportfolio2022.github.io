

$(function(){  // $(document).ready shorthand
  $('.monster').fadeIn('slow');
});

$(document).ready(function() {

    
    $('.toggle-menu').click (function(){
          $(this).toggleClass('active');
          $('#menu').toggleClass('open');
        });
    $('.white-burger').click (function(){
          $(this).toggleClass('active');
          $('#menu').toggleClass('open');
        });

   
     $('.project-opening').animate({
           "margin-top": "+=3rem",
            opacity: 1,
          }, 1100, "swing" );
    
    $('.project-opening').promise().done(function() {
        $('.herohide').animate({
                    opacity: 1,
                  }, 1000 );
    });
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},800);
                console.log("show");
            }
            
        }); 
    
    });
    
});


document.addEventListener("DOMContentLoaded", function(event) {
  var cursor = document.querySelector(".custom-cursor");
  var links = document.querySelectorAll("a");
  var initCursor = false;

  for (var i = 0; i < links.length; i++) {
    var selfLink = links[i];

    selfLink.addEventListener("mouseover", function() {
      cursor.classList.add("custom-cursor--link");
    });
    selfLink.addEventListener("mouseout", function() {
      cursor.classList.remove("custom-cursor--link");
    });
  }

  window.onmousemove = function(e) {
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    if (!initCursor) {
      // cursor.style.opacity = 1;
      TweenLite.to(cursor, 0.3, {
        opacity: 1
      });
      initCursor = true;
    }

    TweenLite.to(cursor, 0, {
      top: mouseY + "px",
      left: mouseX + "px"
    });
  };

  window.onmouseout = function(e) {
    TweenLite.to(cursor, 0.3, {
      opacity: 0
    });
    initCursor = false;
  };
});


$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.hideme1').each( function(i){
//            console.log("01" + $(this).position().top + "outer"+ $(this).outerHeight());
        
            var bottom_of_object = $(this).position().top + $(this).outerHeight() + $(window).height();
            var bottom_of_window = $(window).scrollTop() ;
                        
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},1000);
                $(".homebutton").addClass("filter-white");
                

                    
            }

            
        }); 
        $('.hidesmol1').each( function(i){
//            console.log("01" + $(this).position().top + "outer"+ $(this).outerHeight());
        
            var bottom_of_object = $(this).position().top + $(this).outerHeight() + $(window).height();
            var bottom_of_window = $(window).scrollTop() ;
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                console.log(bottom_of_window +">" + bottom_of_object);
                $(this).animate({'opacity':'1'},2000);
//                console.log("animated");

                    
            }

            
        }); 
    
    });
    
    
    
        /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.hideme2').each( function(i){
//            console.log("01" + $(this).position().top + "outer"+ $(this).outerHeight());
        
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() ;
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                console.log("changed",bottom_of_window +">" + bottom_of_object);
                $(this).animate({'opacity':'1'},1000);
                console.log("animated");
                $(".homebutton").addClass("filter-white");
                $(".toggle-menu").css("display","none");
                $(".white-burger").css("display", "inline-block");
                $("#rightheader").addClass("filter-white");
            }

            if ( bottom_of_window < 500 ){
                $(".white-burger").css("display","none");
                $(".toggle-menu").css("display", "inline-block");
                $(".homebutton").removeClass("filter-white");
                $("#rightheader").removeClass("filter-white");
                console.log("black spade");

                    
            }

            
        }); 
    
    });
    
        /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.hidesmol2').each( function(i){
        
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() ;
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},2000);

                    
            }

            
        }); 
    
    });
    
        /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.hideme3').each( function(i){
        
            var bottom_of_object = $(this).position().top + $(this).outerHeight() + $(window).height() + $(window).height();
            var bottom_of_window = $(window).scrollTop() ;
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},1000);

                    
            }

            
        }); 
    
    });
    
            /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.hidesmol3').each( function(i){
        
            var bottom_of_object = $(this).position().top + $(this).outerHeight() + $(window).height() + $(window).height();
            var bottom_of_window = $(window).scrollTop() ;
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},2000);
//                console.log("animated");

                    
            }

            
        }); 
    
    });
    
            /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.hidemex').each( function(i){
        
            var bottom_of_object = $(this).position().top + $(this).outerHeight() + $(window).height() + $(window).height()+$(window).height();
            var bottom_of_window = $(window).scrollTop() ;
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                            console.log("show");
                $(this).animate({'opacity':'1'},1000);
                console.log("animated");

                    
            }

            
        }); 
    
    });
    
             /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.hidesmolx').each( function(i){
            console.log("01" + $(this).position().top + "outer"+ $(this).outerHeight());
        
            var bottom_of_object = $(this).position().top + $(this).outerHeight() + $(window).height() + $(window).height() + $(window).height();
            var bottom_of_window = $(window).scrollTop() ;
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                console.log(bottom_of_window +">" + bottom_of_object);
                $(this).animate({'opacity':'1'},2000);
                console.log("animated");

                    
            }

            
        }); 
    
    });
    
});
    