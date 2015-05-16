'use strict';

describe('Controller: FlexCtrl', function () {

  // load the controller's module
  beforeEach(module('proyectofinal3App'));

  var FlexCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FlexCtrl = $controller('FlexCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
