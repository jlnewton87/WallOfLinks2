app.config(function($stateProvider, $urlRouterProvider) {
	
  $urlRouterProvider.otherwise("/");
  
  $stateProvider
    .state('app', {
      url: "/",
      templateUrl: "/templates/main.html",
      controller: "WallController"
    })
    
    .state('app.removePanel', {
      url: "panels/remove/:id",
      templateUrl: "/templates/remove-panel.html",
      controller: "PanelController"
    })
    
});