'use strict';

angular.module('recent-table', []);

angular.module('recent-table')
  .directive('recentTable', function ($compile) {
    return {
      //template: '<div></div>',
      restrict: 'A',
      scope: true,      
      controller: function($scope, $element, $attrs) {

        var sortAttr = 'id';

        $scope.sort = function(item) {                      
          if (sortAttr == 'start') {
            return new Date(item[sortAttr]);
          }
          return item[sortAttr];
        }

        $scope.reverse = false;

        $scope.sortBy = function(attr) {  
          //console.log('call');    
          if (sortAttr != attr) {
            $scope.reverse = true;  
            sortAttr = attr;  
          } else {
            $scope.reverse = !$scope.reverse;
          }
        }

        $scope.getSortIcon = function(attr) {
          if (attr != sortAttr) {
            return "icon-minus";
          } else {        
            return $scope.reverse ? "icon-chevron-down" : "icon-chevron-up";
          }        
        }     
      },
      link: function postLink(scope, element, attrs, ctrl) {                            

        function constructBody(bodyDefs) {
          var tr = angular.element('<tr></tr>');
          tr.attr("ng-repeat", "item in " + attrs.list + " | orderBy:sort:reverse");
          var td;
          angular.forEach(bodyDefs, function(def) {
            //debugger;
            td = angular.element("<td>{{item." + def.attribute + (angular.isDefined(def.type) ? " | date:'d MMMM yyyy'" : '') + "}}</td>");  
            tr.append(td);
          });
          return tr;
        }          

        function constructHeader(bodyDefs) {          
          var tr = angular.element("<tr></tr>");
          var th;
          angular.forEach(bodyDefs, function(def) {
            th = angular.element("<th style='cursor: pointer;'></th>"); 
            th.attr("ng-click", "sortBy('"+ def.attribute + "')");            
            th.html(def.title);
            //console.log(def.attribute);
            tr.append(th);
          });
          return tr;
        }

        function getBodyDefs() {
          var defs = [];
          var tds = element.find('tbody td');
          angular.forEach(tds, function(td) {
            var el = angular.element(td);
            defs.push({
              title: el.attr('title'), 
              attribute: el.attr('attribute'),
              type: el.attr('type')
            });                       
          });
          return defs;
        }        

        var bodyDefs = getBodyDefs();

        var header = constructHeader(bodyDefs);
        element.find('thead').append(header);

        var body = constructBody(bodyDefs);
        element.find('tbody').append(body);
                      

        $compile(element.contents())(scope);                        
      }
    };
  });
