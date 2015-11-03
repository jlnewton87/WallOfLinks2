app.controller('PanelController', ['$scope', '$state', '$stateParams', 'dataService', function ($scope, $state, $stateParams, dataService){
	console.log($stateParams.id);
	$scope.showPopup = true;
	$scope.removePanel = function(){
		console.log("This would remove panel: " + $stateParams.id);
		$scope.showPopup = false;
	}
	$scope.cancelPopup = function(){
		$state.go('app');
	}
}]);