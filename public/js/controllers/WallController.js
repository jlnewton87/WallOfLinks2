app.controller('WallController', ['$scope', '$state', 'dataService', function ($scope, $state, dataService){
	dataService.getPanels()
		.then(function(panels){
			$scope.panels = panels;
			$scope.showPopup = false;
		});
	
	$scope.addPanel = function(){
		dataService.addPanel()
			.then(function(newPanels){
				$scope.panels = newPanels;	
				console.log ('got panels' + newPanels[0].title);
			});
	};
	
	$scope.addLink = function(){
		console.log();
	};
	
	$scope.editPanel = function(){
		console.log();
	};
	
	$scope.removePanel = function(){
		$state.go('app.removePanel');
	};
}]);