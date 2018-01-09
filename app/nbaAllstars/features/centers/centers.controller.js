angular
    .module('nbaAllstars.centers') 
    .controller('CentersCtrl', CentersCtrl);

function CentersCtrl($scope) {
    var vm = this; 

    // Show Bill Russell pic on click
    $("#russell-btn").click(function(){
    	$(this).toggleClass('btn-success');

    	if ( $(this).hasClass('btn-success') ) {
		
		$('#russell-pic').show();

		} else if ( $(this).hasClass('btn-primary') ) {

		$('#russell-pic').hide();

		}
    });

    // Show Kareem Abdul Jabbar pic on click
    $("#jabbar-btn").click(function(){
    	$(this).toggleClass('btn-success');

    	if ( $(this).hasClass('btn-success') ) {
		
		$('#jabbar-pic').show();

		} else if ( $(this).hasClass('btn-primary') ) {

		$('#jabbar-pic').hide();

		}
    });

    // Show Shaquille O'Neal pic on click
    $("#oneal-btn").click(function(){
    	$(this).toggleClass('btn-success');

    	if ( $(this).hasClass('btn-success') ) {
		
		$('#oneal-pic').show();

		} else if ( $(this).hasClass('btn-primary') ) {

		$('#oneal-pic').hide();

		}
    });

    // Show Wilt Chamberlain pic on click
    $("#chamberlain-btn").click(function(){
    	$(this).toggleClass('btn-success');

    	if ( $(this).hasClass('btn-success') ) {
		
		$('#chamberlain-pic').show();

		} else if ( $(this).hasClass('btn-primary') ) {

		$('#chamberlain-pic').hide();

		}
    });

    // Show Patrick Ewing pic on click
    $("#ewing-btn").click(function(){
    	$(this).toggleClass('btn-success');

    	if ( $(this).hasClass('btn-success') ) {
		
		$('#ewing-pic').show();

		} else if ( $(this).hasClass('btn-primary') ) {

		$('#ewing-pic').hide();

		}
    });

}