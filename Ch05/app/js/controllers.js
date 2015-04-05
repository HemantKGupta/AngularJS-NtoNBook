'use strict';


angular.module('myApp').controller('TestController',function(helloService){

	helloService.sayHello("Hemant"); // helloService is the service object.

});