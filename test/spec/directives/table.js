'use strict';

describe('Directive: table', function () {
  beforeEach(module('angularTableApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<table></table>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the table directive');
  }));
});
