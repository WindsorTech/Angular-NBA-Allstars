angular
	.module('nbaAllstars.component.nbaPlayer')
	.directive('nbaPlayer', NbaPlayer);

function NbaPlayer() {
	return  {
		restrict: 'E',
		scope: {
			nbaData: '='
		},
		templateUrl: '/nbaAllstars/features/components/nbaPlayer/nbaPlayer.html',
		controller: NbaPlayerCtrl,
		controllerAs: 'NbaPlayerVM',
		bindToController: true
	}
}

function NbaPlayerCtrl($scope) {
	var vm = this;

	$(".fb-share-button").hide();

	$(".btn").click(function(){

		if ( $('#guard-1').hasClass('full') && $('#guard-2').hasClass('full') && $('#forward-1').hasClass('full') && $('#forward-2').hasClass('full') && $('#center-1').hasClass('full') ) {

			$(".fb-share-button").show();

		} else {

			$(".fb-share-button").hide();

		}


	});
	

}