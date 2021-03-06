'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('001AngularYoGruntApp'));
 // load the BootstrapUI module
  beforeEach(module('ui.bootstrap'));
  
  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MainCtrl.awesomeThings.length).toBe(4);
  });
});
