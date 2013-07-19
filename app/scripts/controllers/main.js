'use strict';

angular.module('angularTableApp')
  .controller('MainCtrl', function ($scope) {

    $scope.awesomeThings = [
      {id: 0, name: 'HTML5 Boilerplate', start: '2011-06-16'}, //  ISO 8601 yyyy-MM-dd
      {id: 1, name: 'AngularJS', start: '2011-06-16'}, 
      {id: 2, name: 'Karma', start: '2011-06-13'},            
      {id: 3, name: 'HTML5 Boilerplate', start: '2011-05-14'},
      {id: 4, name: 'AngularJS', start: '2011-05-24'},
      {id: 5, name: 'Karma', start: '2011-07-15'},
      {id: 6, name: 'HTML5 Boilerplate', start: '2011-07-16'},
      {id: 7, name: 'AngularJS', start: '2012-06-01'},
      {id: 8, name: 'Karma', start: '2013-06-08'}, 
      {id: 9, name: 'HTML5 Boilerplate', start: '2013-06-09'},
      {id: 10, name: 'AngularJS', start: '2013-06-10'},
      {id: 11, name: 'Karma', start: '2013-06-11'} 
    ];    

    /*
    var sortAttr = 'id';

    $scope.sort = function(item) {  	  		  		  		
  		if (sortAttr == 'start') {
  			return new Date(item[sortAttr]);
  		}
		return item[sortAttr];
  	};

  	$scope.reverse = false;

  	$scope.sortBy = function(attr) {  
  		console.log('call');		
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
  	};  
  	*/          

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
