// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery.ui.all
//= require jquery_ujs
//= require_tree .

$(document).ready(function() {

	var doc_height = $(document).height() - 150
	$('#content_standard').height(doc_height).css({});
	
	var cur_path = window.location.pathname;

	if (cur_path == "/") {
		$('#home').css('color','#65BAA2');
	}
	else {
		$('#home').hover(
		  function() {
		    $(this).animate({ color: "#65BAA2" }, 500 );
		  },
		  function() {
		    $(this).animate({ color: "#D8EEE8" }, 500 );
		  }
		);
	}

	if (cur_path == "/blog") {
		$('#blog').css('color','#BA95C7');
	}
	else {
		$('#blog').hover(
		  function() {
		    $(this).animate({ color: "#BA95C7" }, 500 );
		  },
		  function() {
		    $(this).animate({ color: "#D8EEE8" }, 500 );
		  }
		);
	}

	if (cur_path == "/about") {
		$('#about').css('color','#DE913E');
	}
	else {
		$('#about').hover(
		  function() {
		    $(this).animate({ color: "#DE913E" }, 500 );
		  },
		  function() {
		    $(this).animate({ color: "#D8EEE8" }, 500 );
		  }
		);
	}
});

