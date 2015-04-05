'use strict';


angular.module('myApp').config(function(greetProvider) { //get the provider injected
	greetProvider.setGreeting('Hola'); //configure our provider
});

angular.module('myApp').controller('TestController',
	function(greet) {
		greet('Hemant'); // use the greet service
});