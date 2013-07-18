'use strict';

angular.module('angularTableApp')
  .directive('myTable', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      	//debugger;
        element.text('this is the table directive');
      }
    };
  });
