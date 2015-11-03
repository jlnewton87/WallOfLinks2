app.config(function($stateProvider, $urlRouterProvider) {
	
  $urlRouterProvider.otherwise("/");
  
  $stateProvider
    .state('app', {
      url: "/",
      templateUrl: "/templates/main.html",
      controller: "WallController"
    })
    
});