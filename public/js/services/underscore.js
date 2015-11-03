//load underscore into angular
app.factory('_', ['$window', function($window){
	return $window._;
}]);