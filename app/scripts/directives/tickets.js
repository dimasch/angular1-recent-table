'use strict';

angular.module('angularTableApp')
  .directive('tickets', function () {
    return {      
      templateUrl: 'views/tickets.html',
      restrict: 'E',
      controller: function($scope, $element, $attrs) {

     	$scope.lastTickets = [
	      {id: 0, name: 'HTML5 Boilerplate', start: '2011-06-16', finish: '2011-06-16'}, //  ISO 8601 yyyy-MM-dd
	      {id: 1, name: 'AngularJS', start: '2011-06-16', finish: '2011-06-16'},                      
	      {id: 2, name: 'AngularJS', start: '2011-05-24', finish: '2011-05-24'},
	      {id: 3, name: 'Karma', start: '2011-07-15'},      
	      {id: 4, name: 'AngularJS', start: '2012-06-01', finish: '2012-06-01'},
	      {id: 5, name: 'Karma', start: '2013-06-08', finish: '2013-06-08'}, 
	      {id: 6, name: 'HTML5 Boilerplate', start: '2013-06-09', finish: '2013-06-09'}
	    ];
	    
      }
      /*,
      link: function postLink(scope, element, attrs) {
        //element.text('This is the tickets directive!');
      }*/
    };
  });
