angular
	.module('nbaAllstars.component.nbaPlayer')
	.directive('nbaPlayer', NbaPlayer);

function NbaPlayer() {
	return  {
		restrict: 'E',
		scope: {
			taskData: '=' 
		},
		templateUrl: '/nbaAllstars/features/components/nbaPlayer/nbaPlayer.html',
		controller: NbaPlayerCtrl,
		controllerAs: 'NbaPlayerVM',
		bindToController: true
	}
}

function NbaPlayerCtrl() {
	var vm = this;

	// Hide players pics - Forwards
	$('#bird-pic').hide();
	$('#pippen-pic').hide();
	$('#james-pic').hide();
	$('#duncan-pic').hide();
	$('#barkley-pic').hide();

	// Hide players pics - Centers
	$('#russell-pic').hide();
	$('#jabbar-pic').hide();
	$('#oneal-pic').hide();
	$('#chamberlain-pic').hide();
	$('#ewing-pic').hide();



	// // property to show or hide edit screen
	// $scope.edit = false;

	// // Function to delete task
	// vm.delete = function(){
	// 	var id = vm.taskData._id;
	// 	library.deleteTask(id);
	// 	$scope.erased = true; 
	// };

	// // Function to update task - completed tick
	// vm.completeTask = function () {
	// 	var update = {
	// 		_id: vm.taskData._id,
	// 		completed: vm.taskData.completed,
	// 		todo: vm.taskData.todo,
	// 		date: vm.taskData.date
	// 	};
	// 	library.updateTask(update);
	// }

	// // Function to save edited task
	// vm.saveTask = function () {
	// 	var update = {
	// 		_id: vm.taskData._id,
	// 		completed: vm.taskData.completed,
	// 		todo: vm.taskData.todo,
	// 		date: vm.taskData.editdate
	// 	};

	// 	// Validation for saving correct task info
	// 	if (update.date == null && update.todo != '') {
	// 		update.date = vm.taskData.date
	// 		library.updateTask(update);
	// 	} else if (update.date != null && update.todo != '') {
	// 		library.updateTask(update);
	// 	}
	// }

	// // Function to reload view to organize tasks on screen
	// vm.reloadView = function() {
	//    $state.reload();
	// }

}