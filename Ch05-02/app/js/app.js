'use strict';

angular.module('myApp', []);

angular.module('myApp').factory('helloService',function(){

	return {

		sayHello: function(name){
			alert('Hello '+name);
		},

		echo: function(message){
			alert(message);
		}
	}

});