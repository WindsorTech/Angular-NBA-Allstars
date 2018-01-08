angular
    .module('nbaAllstars.guards') 
    .controller('GuardsCtrl', GuardsCtrl);

function GuardsCtrl() {
    var vm = this; 

    // Show Michael Jordan pic on click
    $("#jordan-btn").click(function(){
    	$(this).toggleClass('btn-success');

    	if ( $(this).hasClass('btn-success') ) {
		
		$('#jordan-pic').show();

		} else if ( $(this).hasClass('btn-primary') ) {

		$('#jordan-pic').hide();

		}
    });

    // Show Kobe Bryant pic on click
    $("#bryant-btn").click(function(){
    	$(this).toggleClass('btn-success');

    	if ( $(this).hasClass('btn-success') ) {
		
		$('#bryant-pic').show();

		} else if ( $(this).hasClass('btn-primary') ) {

		$('#bryant-pic').hide();

		}
    });

    // Show Magic Johnson pic on click
    $("#johnson-btn").click(function(){
    	$(this).toggleClass('btn-success');

    	if ( $(this).hasClass('btn-success') ) {
		
		$('#johnson-pic').show();

		} else if ( $(this).hasClass('btn-primary') ) {

		$('#johnson-pic').hide();

		}
    });

    // Show Stephen Curry pic on click
    $("#curry-btn").click(function(){
    	$(this).toggleClass('btn-success');

    	if ( $(this).hasClass('btn-success') ) {
		
		$('#curry-pic').show();

		} else if ( $(this).hasClass('btn-primary') ) {

		$('#curry-pic').hide();

		}
    });

    // Show Isiah Thomas pic on click
    $("#thomas-btn").click(function(){
    	$(this).toggleClass('btn-success');

    	if ( $(this).hasClass('btn-success') ) {
		
		$('#thomas-pic').show();

		} else if ( $(this).hasClass('btn-primary') ) {

		$('#thomas-pic').hide();

		}
    });

}