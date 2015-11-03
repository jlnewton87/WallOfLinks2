app.factory('dataService', function($http){
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
		}
	}
});
