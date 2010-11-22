/*
 * jQuery Height Sync
 * Usage: 
 */
 
(function( $ ){
  $.fn.heightsync = function(other_thing,options) {
    var settings = {
      buffer  : 0
    }
    if (options) { 
      $.extend( settings, options );
    }

    var height_this = this.height();
  	var height_other_thing = $(other_thing).height();
  	
    if (height_other_thing < height_this) {
    	$(height_other_thing).css('height', height_this + settings.buffer);
    }
    else if (height_this < height_other_thing) {
    	this.css('height', height_other_thing + settings.buffer);
    }
    return this;
  }
})(jQuery);