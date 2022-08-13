
$(function () {
    'use strict';

    //add just slider
    
    var winH = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH = $('.navbar').innerHeight();
    
        $('.slider, .carousel-item').height(winH - (upperH + navH));
   
	//featured work shuffle
	
	//$('.featured-work ul li').on('hover', function () {
	//$(this).addClass('hover').siblings().removeClass('hover');
	
	
//	}
	
	
	$('.featured-work ul li').on('click', function () {
		
		$(this).addClass('active').siblings().removeClass('active');
		if ($(this).data('class') === 'all') {
			$('.shuffle-imgs .col-md-6, .col-md-3 ').css('opacity', 1);
			
		}else{
			$('.shuffle-imgs .col-md-6, .col-md-3 ').css('opacity', '.07');
			$($(this).data('class')).parent().css('opacity', 1);
			
		}
	})
    
    
//Smooth scroll
   
   $('.navbar li a').click(function () {
	   
	  $('html, body').animate({
		  
		  scrollTop: $('#' + $(this).data('value')).offset().top
		  
	  }, 1000);
	   
	   console.log($(this).data('value'));
   });
});