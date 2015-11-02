app.controller('wallController', ['$scope', 'dataService', function ($scope, dataService){
	dataService.getPanels()
		.then(function(panels){
			$scope.panels = panels;
		});
}]);