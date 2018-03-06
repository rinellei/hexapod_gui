( function( $ ) {
$( document ).ready(function() {
$('#nav-menu').prepend('<div id="menu-button"><img src="svg/menu_icon.svg" /></div>');
	$('#nav-menu #menu-button').on('click', function(){
		var menu = $(this).next('ul');
		if (menu.hasClass('open')) {
			menu.removeClass('open');
		}
		else {
			menu.addClass('open');
		}
	});
});
} )( jQuery );
