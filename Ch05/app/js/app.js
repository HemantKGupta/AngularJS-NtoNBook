'use strict';

angular.module('myApp', []);

angular.module('myApp').service('helloService',function($timeout){

	this.sayHello=function(name){ // define an instance method

		$timeout(function(){
			alert('Hello '+name);
		},2000);
	}
});