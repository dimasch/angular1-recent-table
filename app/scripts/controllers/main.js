'use strict';

angular.module('angularTableApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      {id: 0, name: 'HTML5 Boilerplate'},
      {id: 1, name: 'AngularJS'},
      {id: 2, name: 'Karma'},            
      {id: 3, name: 'HTML5 Boilerplate'},
      {id: 4, name: 'AngularJS'},
      {id: 5, name: 'Karma'},
      {id: 6, name: 'HTML5 Boilerplate'},
      {id: 7, name: 'AngularJS'},
      {id: 8, name: 'Karma'}, 
      {id: 9, name: 'HTML5 Boilerplate'},
      {id: 10, name: 'AngularJS'},
      {id: 11, name: 'Karma'} 
    ];

    var vowels = ["a", "e", "i", "o", "u"];
    $scope.vowelsList = function(word) {
      var list = [];
      for(var i = 0; i < vowels.length; i++) {
      	//debugger;
        if (word.indexOf(vowels[i]) > -1) {
          list.push(vowels[i]);
        }
      }
      return list;
    };

    var vowelClasses = ["badge-success", "badge-warning", "badge-important", "badge-info", "badge-inverse"];
    $scope.vowelClass = function(vowel) {
      return vowelClasses[vowels.indexOf(vowel)];
    };
  });
