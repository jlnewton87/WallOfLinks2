app.controller('wallController', function ($scope, dataService){
	$scope.panels = dataService.getPanels();
});