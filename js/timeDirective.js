var app = angular.module('timeApp');

  app.directive('showTime', function(){
  return {
  	restrict: 'E',
  	template: `<div> The current time is {{time | date: 'mediumTime'}}</div>`,
  	link: function(scope, element, attributes){
  		setInterval(function (){
			scope.time = new Date();
			scope.$apply();
  		}, 1000);
  		scope.time = new Date();
  	}
  }
});