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

function getPanels($http){
	
	return $http.get('/panels')
		.then(
			function(response){
				return response.data; 
			},
			function(err){
				console.log('could not get panels?! \n' + err)
			}
		);
		
		/*return [
				{
					title: "Panel 1",
					_id: 'e81eb282-0981-49d6-bf2e-8263ef999b83',
					order: 1,
					links: [
						{href: "https://google.com", text: "Google1", order: 1},
						{href: "https://google.com", text: "Google2", order: 2}
					]
				},
				{
					title: "Panel 2",
					_id: '009628a4-57d0-4955-913c-914e56f3bbdf',
					order: 2,
					links: [
						{href: "https://google.com", text: "Google1", order: 1},
						{href: "https://google.com", text: "Google2", order: 2}
					]
				},
				{
					title: "Panel 3",
					_id: '009628a4-57d0-4955-913c-914e56f3bbdf',
					order: 2,
					links: [
						{href: "https://google.com", text: "Google1", order: 1},
						{href: "https://google.com", text: "Google2", order: 2}
					]
				},
				{
					title: "Panel 4",
					_id: '009628a4-57d0-4955-913c-914e56f3bbdf',
					order: 2,
					links: [
						{href: "https://google.com", text: "Google1", order: 1},
						{href: "https://google.com", text: "Google2", order: 2}
					]
				}
			];
		};*/
};
