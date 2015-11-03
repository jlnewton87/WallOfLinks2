app.controller('WallController', ['$scope', 'dataService', function ($scope, dataService){
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
	$scope.updateCurrentPanel = function(panelId){
		console.log(panelId);
		$scope.currentPanelId = panelId;
	};
	
	$scope.addLink = function(panelId){
		console.log(panelId);
		$scope.currentPanelId = panelId;
	};
	
	$scope.editPanel = function(panelId){
		console.log(panelId);
		$scope.currentPanelId = panelId;
	};
	
	$scope.removePanel = function(panelId){
		$state.go('app.removePanel');
	};
}]);