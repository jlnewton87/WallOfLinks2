app.controller('WallController', ['$scope', '$rootScope', '$state', 'dataService', function ($scope, $rootScope, $state, dataService){
	
	getPanels();
	
	$scope.updateWall = getPanels;
	
	$scope.addPanel = function(){
		dataService.addPanel()
			.then(function(newPanels){
				$scope.panels = newPanels;
			});
	};
	
	$scope.addLink = function(){
		$state.go('app.panel.addLink');
	};
	
	$scope.editPanel = function(){
		$state.go('app.panel.editPanel');
	};
	
	$scope.removePanel = function(){
		$state.go('app.panel.removePanel');
	};
	
	function getPanels(){
		dataService.getPanels()
			.then(function(panels){
				$scope.panels = panels;
			});	
	}
}]);