(function($){$.fn.extend({repositionBorders:function(){$('body div.animatedBorder').each(function(){var color=$('.animatedBorderSprite-top',$(this)).css('background-color'),size=$('.animatedBorderSprite-top',$(this)).height();$(this).animatedBorder().animatedBorder({'size':size,'color':color});});},animatedBorder:function(options){var defaults={size:1,color:'#6699CC',hover:false},opacity=0.3,size;options=$.extend(defaults,options);return this.each(function(){switch(options){case'hide':$(this).children('.animatedBorderSprite').fadeOut('slow');break;case'show':$(this).children('.animatedBorderSprite').fadeIn('fast');break;case'destroy':$(this).children('.animatedBorderSprite').remove();$(this).unbind('mouseenter mouseleave');break;default:if($(this).hasClass('animatedBorder')){$('.animatedBorderSprite',$(this)).remove();$(this).removeClass('animatedBorder');return;}$(this).addClass('animatedBorder');size={height:$(this).innerHeight(),width:$(this).innerWidth()};$(this).append($('<div />').addClass('animatedBorderSprite animatedBorderSprite-top').css({'top':-options.size,'left':-options.size,'width':size.width+(2*options.size),'height':options.size,'background-color':options.color}));$(this).append($('<div />').addClass('animatedBorderSprite animatedBorderSprite-bottom').css({'bottom':-options.size,'left':-options.size,'width':size.width+(2*options.size),'height':options.size,'background-color':options.color}));$(this).append($('<div />').addClass('animatedBorderSprite').css({'top':0,'left':-options.size,'width':options.size,'height':size.height,'background-color':options.color}));$(this).append($('<div />').addClass('animatedBorderSprite').css({'top':0,'right':-options.size,'width':options.size,'height':size.height,'background-color':options.color}));if(options.hover){$(this).hover(function(){$(this).children('.animatedBorderSprite').fadeIn('fast');},function(){$(this).children('.animatedBorderSprite').fadeOut('slow');});$(this).children('.animatedBorderSprite').hide();}}});}});}(jQuery));