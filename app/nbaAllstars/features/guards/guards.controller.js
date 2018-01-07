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

    // Show Stephen Curry pic on click
    $("#curry-btn").click(function(){
    	$(this).toggleClass('btn-success');

    	if ( $(this).hasClass('btn-success') ) {
		
		$('#curry-pic').show();

		} else if ( $(this).hasClass('btn-primary') ) {

		$('#curry-pic').hide();

		}
    });

}