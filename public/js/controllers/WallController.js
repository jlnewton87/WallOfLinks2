app.controller('WallController', ['$scope', 'dataService', function ($scope, dataService){
	dataService.getPanels()
		.then(function(panels){
			$scope.panels = panels;
			$scope.showPopup = false;
			$scope.addPanel = function(){
				dataService.addPanel()
					.then(function(panels){
						$scope.panels = panels;	
					});
			};
		});
}]);