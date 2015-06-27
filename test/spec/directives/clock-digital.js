'use strict';

describe('Directive: clockDigital', function () {

  // load the directive's module
  beforeEach(module('g4cClocksApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<clock-digital></clock-digital>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the clockDigital directive');
  }));
});
