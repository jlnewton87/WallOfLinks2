app.controller('PanelController', ['$scope', '$state', '$stateParams', 'dataService', '_', function ($scope, $state, $stateParams, dataService, _){
	//now we have the panel object
	//use it instead of the id
	$scope.currentPanel = _.findWhere($scope.$parent.panels, {_id: $stateParams.id});
	
	$scope.removePanel = function(){
		dataService
			.removePanel($scope.currentPanel._id)
			.then($scope.$parent.updateWall());
		
	}
	
	$scope.editPanel = function(){
		dataService
			.updatePanel($scope.currentPanel, true)
			.then($scope.$parent.updateWall());
	}
	
	$scope.addLink = function(){
		$scope.currentPanel.links.push({text: '', url: '', order: 0});
		dataService
			.updatePanel($scope.currentPanel, false)
	}
	
	//used for all app states
	//(addLink, editPanel, and removePanel) 
	$scope.cancelPopup = function(){
		$state.go('app');
	}
}]);