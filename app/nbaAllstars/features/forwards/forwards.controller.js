angular
    .module('nbaAllstars.forwards') 
    .controller('ForwardsCtrl', ForwardsCtrl);

function ForwardsCtrl($scope) {
    var vm = this; 

    // Show Larry Bird pic on click
    $("#bird-btn").click(function(){
    	$(this).toggleClass('btn-success');

    	if ( $(this).hasClass('btn-success') ) {
		
		$('#bird-pic').show();

		} else if ( $(this).hasClass('btn-primary') ) {

		$('#bird-pic').hide();

		}
    });

    // Show Scottie Pippen pic on click
    $("#pippen-btn").click(function(){
    	$(this).toggleClass('btn-success');

    	if ( $(this).hasClass('btn-success') ) {
		
		$('#pippen-pic').show();

		} else if ( $(this).hasClass('btn-primary') ) {

		$('#pippen-pic').hide();

		}
    });

	// Show LeBron James pic on click
    $("#james-btn").click(function(){
    	$(this).toggleClass('btn-success');

    	if ( $(this).hasClass('btn-success') ) {
		
		$('#james-pic').show();

		} else if ( $(this).hasClass('btn-primary') ) {

		$('#james-pic').hide();

		}
    });

    // Show Tim Duncan pic on click
    $("#duncan-btn").click(function(){
    	$(this).toggleClass('btn-success');

    	if ( $(this).hasClass('btn-success') ) {
		
		$('#duncan-pic').show();

		} else if ( $(this).hasClass('btn-primary') ) {

		$('#duncan-pic').hide();

		}
    });

    // Show Charles Barkley pic on click
    $("#barkley-btn").click(function(){
    	$(this).toggleClass('btn-success');

    	if ( $(this).hasClass('btn-success') ) {
		
		$('#barkley-pic').show();

		} else if ( $(this).hasClass('btn-primary') ) {

		$('#barkley-pic').hide();

		}
    });

}