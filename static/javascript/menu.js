
$(document).ready(function(){

	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
        $("#UI_Apps").toggleClass('opened');
        $("#UI_MenuBar").toggleClass("scrolled");

        var audio = new Audio('static/sounds/Menu.wav');
        audio.play();
	});


    $(".UI_Navigation_Tag").click(function(){
        $('.UI_Navigation_Tag.is-active').not(this).removeClass('is-active');
        $(this).toggleClass('is-active');

        var audio = new Audio('static/sounds/Slide.wav');
        audio.play();


	});

    $(function() {
        $(".UI_Navigation_Menu").swipe( {
          //Generic swipe handler for all directions
          swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
            if(direction == "left")
            {
                var page = $('.UI_Navigation_Tag.is-active').index();
                var classes = $('.UI_Navigation_Tag').length - 1;


                if(classes == page)
                {
                }
                else
                {
                    $('.UI_Navigation_Tag.is-active').removeClass('is-active');
                    $(('.UI_Navigation_Tag')).eq(page + 1).toggleClass('is-active');
            
                    var audio = new Audio('static/sounds/Slide.wav');
                    audio.play();
                }
            }

            if(direction == "right")
            {
                var page = $('.UI_Navigation_Tag.is-active').index();
                var classes = $('.UI_Navigation_Tag').length - 1;


                if(page == 0)
                {
                }
                else
                {
                    $('.UI_Navigation_Tag.is-active').removeClass('is-active');
                    $(('.UI_Navigation_Tag')).eq(page - 1).toggleClass('is-active');
            
                    var audio = new Audio('static/sounds/Slide.wav');
                    audio.play();
                }
            }
          }
        });
      
        //Set some options later
        $(".UI_Navigation_Menu").swipe( {fingers:2} );
      });
});

$(function(){
    var hasBeenTrigged = false;
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50 && !hasBeenTrigged) { // if scroll is greater/equal then 100 and hasBeenTrigged is set to false.
            $("#UI_MenuBar").toggleClass("scrolled");
            hasBeenTrigged = true;
        }
        else if ($(this).scrollTop() <= 50 && hasBeenTrigged)  
            {
                $("#UI_MenuBar").toggleClass("scrolled");
                hasBeenTrigged = false;
            }
    });
});