'use strict';

angular.module('recent-table', []);

angular.module('recent-table')
  .directive('recentTable', function ($compile) {
    return {      
      restrict: 'A',
      scope: true,      
      controller: function($scope, $element, $attrs) {
        
        var sortAttr = $element.find('tbody td:first').attr('attribute');

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
          var td, widthStyle;
          angular.forEach(bodyDefs, function(def) {                        
            widthStyle = (def.width != '') ? ('max-width: ' + def.width + 'px;') : 'max-width: 100px;';
            if (def.html != '') {
              td = angular.element("<td style='" + widthStyle + "'>" + def.html + "</td>");            
            } else {
              // 'd MMMM yyyy h:mm:ss'
              td = angular.element("<td style='" + widthStyle + "'>{{item." + def.attribute + (def.type == 'date' ? " | date: 'medium'" : '') + "}}</td>");    
            }  
            tr.append(td);
          });
          return tr;
        }          

        function constructHeader(bodyDefs, heads) {          
          var tr = angular.element("<tr></tr>");
          var th, icon, widthStyle;          
          angular.forEach(bodyDefs, function(def) {
            widthStyle = (def.width != '') ? ('max-width: ' + def.width + 'px;') : 'max-width: 100px;';
            th = angular.element("<th style='cursor: pointer;" +  widthStyle  + "'></th>"); 
            th.attr("data-resizable-column-id", def.attribute);           
            th.html(angular.isDefined(heads[def.attribute]) ? heads[def.attribute] : def.title);
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

        function getHeadDefs() {          
          var defs = {};
          var ths = element.find('thead th');  
          var el;
          angular.forEach(ths, function(td) {
             el = angular.element(td);
             defs[el.attr('attribute')] = el.html();
          });          
          return defs;
        }

        function getBodyDefs() {
          var defs = [];
          var tds = element.find('tbody td');
          angular.forEach(tds, function(td) {
            var el = angular.element(td);                        
            defs.push({
              title: el.attr('title'), 
              attribute: el.attr('attribute'),
              html: el.html(),
              type: angular.isDefined(el.attr('type')) ? el.attr('type') : '',
              sortable: angular.isDefined(el.attr('sortable')) ? true : false,
              width: angular.isDefined(el.attr('width')) ? el.attr('width') : ''
            });                       
          });
          return defs;
        }        
        
        // Hide the initial tbody
        element.find('tbody tr:first').hide();

        // Hide the initial thead
        element.find('thead').hide();        
                
        var thead = angular.element('<thead></thead>');
        element.prepend(thead);

        var bodyDefs = getBodyDefs();

        var header = constructHeader(bodyDefs, getHeadDefs());        
        thead.append(header);

        var body = constructBody(bodyDefs);
        element.find('tbody').append(body);

        // Call Resize Plugin
        element.resizableColumns({store: store});
                      
        // Compile contents of element in this scope
        $compile(element.contents())(scope);                        
      }
    };
  });
