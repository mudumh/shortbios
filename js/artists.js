	
$( document ).ready(function() {
	
	$("ul#sti-menu li").hover(
	function()	{	$(this).find("a h2,a h3").fadeTo(100,1);} ,
	function()	{	$(this).find("a h2,a h3").fadeTo(100,0.5);	});

});
