// JavaScript Document
jQuery.Footer = function(settings){
	var config = {
		element : '.footer',
		fixed : false,
		reference : window,
		setWidth : true
	};
	if (settings){$.extend(config, settings);}
	var interval = 0;
	var diffX;
	var diffY;
	var width;
	var PosRelative = function()
	{
		$(config.element).css({'margin-top':'0px'});
		var $pos = $(window).height() - $(config.element).height() - $(config.element).offset().top - diffY;
		if($pos > 0)
		{
			$pos = $pos + 'px';
			if(config.setWidth == true)
			{
				$(config.element).css({
					'margin-top' : $pos,
					'width': width
				});
			}
			else
			{
				$(config.element).css({
					'margin-top' : $pos
				});
			}
		}
		else if(config.setWidth == true)
		{
			$(config.element).css({
				'width': width
			});
		}
	}
	var PosFixed = function()
	{
		var $pos = $(window).height() - $(config.element).height() - diffY;
		
		$pos = $pos + 'px';
		$(config.element).css({
			'margin' : '0',
			'position' : 'fixed',
			'width': width,
			'top': $pos
		});
	}
	var Resize = function()
	{
		diffY =  Number($(config.element).css('padding-bottom').replace('px','')) + Number($(config.element).css('padding-top').replace('px',''));
		diffX =  Number($(config.element).css('padding-left').replace('px','')) + Number($(config.element).css('padding-right').replace('px',''));
		width = $(config.reference).width() - diffX;
		
		if(config.fixed)
		{
			PosFixed();
		}
		else
		{
			PosRelative();	
		}
	}
	IntervalResize = function()
	{
		Resize();
		clearInterval(interval);
	}
	Update = function()
	{
		clearInterval(interval);
		interval = setInterval(IntervalResize, 200);
		Resize();
	}
	var Init = function()
	{
		$(window).bind({'resize' : Update});
		Update();
		
	}
	Init();
};