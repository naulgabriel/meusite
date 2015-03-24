// JavaScript Document
$( document ).ready(function() {
	// Handler for .ready() called.
	
	// Closes the Responsive Menu on Menu Item Click
	$('.navbar-collapse ul li a').click(function() {
		$('.navbar-toggle:visible').click();
	});
	
	
	 $window = $(window);
    //Captura cada elemento section com o data-type "background"
    $('section[data-type="background"]').each(function(){
        var $scroll = $(this);   
            //Captura o evento scroll do navegador e modifica o backgroundPosition de acordo com seu deslocamento.            
            $(window).scroll(function() {
                var yPos = -($window.scrollTop() / $scroll.data('speed')); 
                var coords = '50% '+ yPos + 'px';
                $scroll.css({ backgroundPosition: coords });    
            });
   });  


	

});
