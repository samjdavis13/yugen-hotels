$(document).foundation();

// ================
// VARS
// ================

var searchBar = $('#search-bar');





// ================
// ONLOAD FUNCTION
// ================

$(function(){
	searchBar.toggle();
});





// ================
// CUSTOM LISTENERS
// ================

// Search toggle 
$('#toggle-search-bar').click(function(){
	// slideToggle() animates the toggle
	searchBar.slideToggle(); 
	// Changes focus to the text box after the animation
	$('#search-bar-input').focus(); 
});