app.factory('dataService', function($http, $state){
	return {
		getPanels: function getPanels(){
			return $http.get('/panels')
				.then(
					function(response){
						return response.data; 
					}
				)
				.catch(function(err){
					console.log(err);
					throw err;
				});
		},
		
		addPanel: function(){
			return $http.get('/panels/add')
				.then(
					function(response){
						return response.data
					}
				)
				.catch(function(err){
					console.log(err);
					throw err;	
				});
		},
		
		removePanel: function(panelId){
			return $http.delete('/panels/remove/' + panelId)
				.then(
					function(response){
						$state.go('app');
					}
				)
				.catch(function(err){
					console.log(err);
					throw err;	
				});
		},
		
		updatePanel: function(panelObject, refresh){
			return $http.post('/panels/update/', {data: panelObject})
				.then(
					function(response){
						if(refresh)
						{
							$state.go('app');
						}
					}
				)
				.catch(function(err){
					console.log(err);
					throw err;	
				});
		}
	}
});
