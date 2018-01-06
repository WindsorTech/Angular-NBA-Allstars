angular
    .module('nbaAllstars.guards') 
    .controller('GuardsCtrl', GuardsCtrl);

function GuardsCtrl($scope) {
    var vm = this; 

    $(".btn").click(function(){
    	$(this).toggleClass('btn-success');

    	if ( $(this).hasClass('btn-success') ) {
		
		$('#curry').show();

		} else if ( $(this).hasClass('btn-primary') ) {

		$('#curry').hide();

		}
    });

}