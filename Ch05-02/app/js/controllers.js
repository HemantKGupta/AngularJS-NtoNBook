'use strict';


angular.module('myApp').controller('TestController',function(helloService) {

	helloService.sayHello('AngularJS'); //alerts Hello AngularJS
	helloService.echo('I Love AngularJS'); //alerts I Love AngularJS

});