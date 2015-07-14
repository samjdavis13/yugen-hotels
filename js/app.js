
$(document).foundation();

// ================
// VARS
// ================

var searchBar = $('#search-bar');





// ================
// ONLOAD FUNCTION
// ================

$(function(){
	$(document).foundation();
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
// Listen for escape key to close search bar if open
$('#search-bar-input').keyup(function(e) {
	if (e.keyCode === 27) {
		// Escape key pressed
		searchBar.slideToggle(); 
	}
});

// Fixes data-interchange images insisde of data-equalizer content
$(document).on('replace', 'img', function() {
  $(document).foundation('equalizer', 'reflow');
});



