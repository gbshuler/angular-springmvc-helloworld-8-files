angular.module('com.gbshuler.helloworld', [])		
		.controller('HelloWorldController', ['$http', '$scope',  function($http, $scope) {
			$scope.helloValue = "http://www.gbshuler.com";
		}]);