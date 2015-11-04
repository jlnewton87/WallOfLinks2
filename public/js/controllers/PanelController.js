app.controller('PanelController', ['$scope', '$rootScope', '$state', '$stateParams', 'dataService', '_', function ($scope, $rootScope, $state, $stateParams, dataService, _, $stateProvider){
	
		function init(){
		dataService.getPanels()
			.then(function(panels){
				$scope.panels = panels;
				$scope.currentPanel = _.findWhere($scope.panels, {_id: $stateParams.id});
				
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
				
				$scope.removeLink = function(linkText){
					$scope.currentPanel.links = _.filter($scope.currentPanel.links, function(link){
						return link.text !== linkText;
					});
					dataService
						.updatePanel($scope.currentPanel, false)
				}
	
				//used for all app states
				//(addLink, editPanel, and removePanel) 
				$scope.cancelPopup = function(){
					$state.go('app');
					$scope.$parent.updateWall()
				}
			});	
		}
		
		init()
	
	
}]);