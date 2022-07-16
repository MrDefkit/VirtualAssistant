jQuery(function($) {
  'use strict';

  // -------------------------------------------------------------
  //   Basic Navigation
  // -------------------------------------------------------------
  (function() {
    var $frame = $('#basic');
    var $slidee = $frame.children('ul').eq(0);
    var $wrap = $frame.parent();

    // Call Sly on frame
    $frame.sly({
      horizontal: 1,
      itemNav: 'basic',
      smart: 1,
      activateOn: 'click',
      mouseDragging: 1,
      touchDragging: 1,
      releaseSwing: 1,
      startAt: 0,
      scrollBy: 1,
      activatePageOn: 'click',
      speed: 300,
      elasticBounds: 1,
      easing: 'easeOutExpo',
      dragHandle: 1,
      dynamicHandle: 1,
      clickBar: 1,

    });

  }());

  // -------------------------------------------------------------
  //   Centered Navigation
  // -------------------------------------------------------------

  $(".clearfix li").click(function(){

    var audio = new Audio('static/sounds/Menu.wav');
    audio.play();


});

});

$(".UI_All_Tags_Recepies_Tag").click(function(){

  var audio = new Audio('static/sounds/Click.wav');
  audio.play();


});


$(document).ready(function(){

  $(".UI_Navigation_Tag").click(function(){

    i = $(this).index();
    k = i -1;


    $(".UI_All_Container_Page").not( ":nth-child(" + k + ")" ).css({'left': '-5000px'});
    if(k = 2)
    {
      $(".UI_All_Container_Page").eq(0).css({'left': '-5000px'});
    }

    $(".UI_All_Container_Page").eq(i).css({'left': '0'});
  });

});
