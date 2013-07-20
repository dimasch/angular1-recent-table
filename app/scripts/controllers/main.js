'use strict';

angular.module('angularTableApp')
  .controller('MainCtrl', function ($scope) {

    $scope.lastTickets = [
      {id: 0, name: 'HTML5 Boilerplate', start: '2011-06-16', finish: '2011-06-16'}, //  ISO 8601 yyyy-MM-dd
      {id: 1, name: 'AngularJS', start: '2011-06-16', finish: '2011-06-16'}, 
      {id: 2, name: 'Karma', start: '2011-06-13', finish: '2011-06-13'},            
      {id: 3, name: 'HTML5 Boilerplate', start: '2011-05-14', finish: '2011-05-14'},
      {id: 4, name: 'AngularJS', start: '2011-05-24', finish: '2011-05-24'},
      {id: 5, name: 'Karma', start: '2011-07-15'/*, finish: '2011-07-15'*/},
      {id: 6, name: 'HTML5 Boilerplate', start: '2011-07-16', finish: '2011-07-16'},
      {id: 7, name: 'AngularJS', start: '2012-06-01', finish: '2012-06-01'},
      {id: 8, name: 'Karma', start: '2013-06-08', finish: '2013-06-08'}, 
      {id: 9, name: 'HTML5 Boilerplate', start: '2013-06-09', finish: '2013-06-09'},
      {id: 10, name: 'AngularJS', start: '2013-06-10', finish: '2013-06-10'},
      {id: 11, name: 'Karma', start: '2013-06-11', finish: '2013-06-11'} 
    ];            
    
  });
