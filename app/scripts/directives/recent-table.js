'use strict';

angular.module('recent-table', []);

angular.module('recent-table')
  .directive('recentTable', function ($compile) {
    return {
      //template: '<div></div>',
      restrict: 'A',
      scope: true,      
      controller: function($scope, $element, $attrs) {
        
        var sortAttr = $element.find('tbody td:first').attr('attribute');//'id';

        var dateEls = $element.find('tbody td[type=date]');
        var dateAttrs = $.map(dateEls, function(val) {          
          return angular.element(val).attr('attribute');
        });        

        $scope.sort = function(item) {           
          if ($.inArray(sortAttr, dateAttrs) !== -1)  {
            return new Date(item[sortAttr]);
          }
          return item[sortAttr];
        }

        $scope.reverse = false;

        $scope.sortBy = function(attr) {                
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
            td = angular.element("<td>{{item." + def.attribute + (def.type == 'date' ? " | date:'d MMMM yyyy'" : '') + "}}</td>");  
            tr.append(td);
          });
          return tr;
        }          

        function constructHeader(bodyDefs) {          
          var tr = angular.element("<tr></tr>");
          var th, icon;
          angular.forEach(bodyDefs, function(def) {
            th = angular.element("<th style='cursor: pointer;'></th>");
            th.html('' + def.title);
            if (def.sortable) {
              th.attr("ng-click", "sortBy('"+ def.attribute + "')");
              icon = angular.element("<i style='margin-left: 10px;'></i>");
              icon.attr("ng-class", "getSortIcon('" + def.attribute + "')");
              th.append(icon);
            }                                                
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
              type: angular.isDefined(el.attr('type')) ? el.attr('type') : '',
              sortable: angular.isDefined(el.attr('sortable')) ? true : false
            });                       
          });
          return defs;
        }        
        
        // Hide the initial template
        element.find('tbody tr:first').hide();
                
        var thead = angular.element('<thead></thead>');
        element.prepend(thead);

        var bodyDefs = getBodyDefs();

        var header = constructHeader(bodyDefs);        
        thead.append(header);

        var body = constructBody(bodyDefs);
        element.find('tbody').append(body);
                      
        // Compile contents of element in this scope
        $compile(element.contents())(scope);                        
      }
    };
  });
