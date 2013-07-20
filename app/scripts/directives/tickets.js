'use strict';

angular.module('angularTableApp')
  .directive('tickets', function () {
    return {      
      templateUrl: 'views/tickets.html',
      restrict: 'E'/*,
      link: function postLink(scope, element, attrs) {
        //element.text('This is the tickets directive!');
      }*/
    };
  });
