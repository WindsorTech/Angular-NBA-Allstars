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

	

}