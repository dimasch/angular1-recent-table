'use strict';

angular.module('angularTableApp')
  .controller('MainCtrl', function ($scope) {

    $scope.awesomeThings = [
      {id: 0, name: 'HTML5 Boilerplate', start: '2011-06-16'}, //  ISO 8601 yyyy-MM-dd
      {id: 1, name: 'AngularJS', start: '2011-06-16'}, 
      {id: 2, name: 'Karma', start: '2011-06-13'},            
      {id: 3, name: 'HTML5 Boilerplate', start: '14 May 2011'},
      {id: 4, name: 'AngularJS', start: '24 May 2011'},
      {id: 5, name: 'Karma', start: '15 July 2011'},
      {id: 6, name: 'HTML5 Boilerplate', start: '16 July 2011'},
      {id: 7, name: 'AngularJS', start: '1 June 2012'},
      {id: 8, name: 'Karma', start: '8 June 2013'}, 
      {id: 9, name: 'HTML5 Boilerplate', start: '9 June 2013'},
      {id: 10, name: 'AngularJS', start: '10 June 2013'},
      {id: 11, name: 'Karma', start: '11 June 2013'} 
    ];    

    var sortAttr = 'id';

    $scope.sort = function(item) {  	  		  		  		
  		if (sortAttr == 'start') {
  			return new Date(item[sortAttr]);
  		}
		return item[sortAttr];
  	};

  	$scope.reverse = false;

  	$scope.sortBy = function(attr) {  		
  		if (sortAttr != attr) {
  			$scope.reverse = true;	
  			sortAttr = attr;	
  		} else {
  			$scope.reverse = !$scope.reverse;
  		}
  	};

  	$scope.getSortIcon = function(attr) {
  		if (attr != sortAttr) {
  			return "icon-minus";
  		} else {  			
  			return $scope.reverse ? "icon-chevron-down" : "icon-chevron-up";
  		}
        //if $scope.descending then "icon-chevron-down" else "icon-chevron-up"
  	};            

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
