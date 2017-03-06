(function($){
  $.fn.goesSticky = function(options){

    var hey = $("#ProductThumbs").outerHeight();

    var settings = $.extend({
        scope: $("body"), // the relative element
        offset: 0
    }, options );

    // Declaring vars which shouldn't be in the scroll function
    var thisEl = this,
        stickyInitialTopOffset = this.offset().top,
        stickyHeight = this.outerHeight(),
        stickyWidth = this.outerWidth(),
        positionState = "relative",
        offset = settings.offset;

    function stickyElement(){
      var heyDynamic = $("#ProductThumbs").outerHeight();
      // Declaring vars which shouldn be in the scroll function
      var documentScroll = $(document).scrollTop(),
          dynamicTopOffset = documentScroll + offset,
          stickyTopBuffer = 0,
          stickyBottomBuffer = "initial",
          stickyScrollPosition = 0,
          parentHeight = settings.scope.outerHeight(),
          stickyDynamicHeight = thisEl.outerHeight(),
          diffrence = 0;
      
      if(dynamicTopOffset > stickyInitialTopOffset && parentHeight > stickyHeight){
        stickyScrollPosition = (documentScroll - stickyInitialTopOffset + offset ) + stickyHeight;
        positionState = "fixed";
        stickyTopBuffer = offset;
        //stickyBottomBuffer = "initial";
      } else {
        stickyScrollPosition = 0;
        positionState = "relative";
        stickyTopBuffer = 0;
        //stickyBottomBuffer = "initial";
      }

      if(stickyScrollPosition >= parentHeight && parentHeight > stickyHeight){ 
        stickyTopBuffer = parentHeight - stickyHeight;
        //stickyBottomBuffer = 0;
        positionState = "absolute";
      }

      thisEl.css({
        "position": positionState,
        "top": stickyTopBuffer,
        "width": thisEl.parent().width(),
        "box-sizing": "border-box"
      });
      
    }

    $(window).on("scroll", function(){
       stickyElement();
    });
    
    $(window).on("load", function(){
      stickyElement();
    });

    return this;
  };
}(jQuery)); 

$(".side-bar").goesSticky({
  scope: $(".right-content"),
  offset: 0
})