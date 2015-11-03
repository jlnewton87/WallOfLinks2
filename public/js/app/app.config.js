app.config(function($stateProvider, $urlRouterProvider) {
	
  $urlRouterProvider.otherwise("/");
  
  $stateProvider
    .state('app', {
      url: "/",
      templateUrl: "/templates/main.html",
      controller: "WallController"
    })
    
    .state('app.panel', {
      url: "panels/:id/",
      controller: "PanelController",
      template: "<div ui-view/>",
      abstract: true
    })
    
    .state('app.panel.removePanel', {
      url: "remove/",
      templateUrl: "/templates/remove-panel.html"
    })
    
    .state('app.panel.editPanel', {
      url:"edit/",
      templateUrl: "/templates/edit-panel.html"
    })
    
});