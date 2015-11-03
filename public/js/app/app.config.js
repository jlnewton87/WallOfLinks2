app.config(function($stateProvider, $urlRouterProvider) {
	
  $urlRouterProvider.otherwise("/");
  
  $stateProvider
    .state('app', {
      url: "/",
      templateUrl: "/templates/main.html",
      controller: "WallController"
    })
    
    .state(
      'app.addPanel', {
        url: "/popup/add-panel",
        templateUrl: "/templates/add-panel.html",
        controller: ""
      });
});