goog.provide("sample.AppController");

/**
 * @ngInject
 * @param {angular.Scope} $scope
 * @constructor
 */
sample.AppController = function($scope, $timeout, $mdSidenav) {



  $scope["toggleLeft"] = function(){
    $mdSidenav('left').toggle();
  };
  $scope["closeLeft"] = function(){
    $mdSidenav('left').close();
  };
  $scope["showLeft"] = function(){
    $mdSidenav('left').show();
  };

  $scope["todos"] = [
    {
      face : "http://placehold.it/150x150",
      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    },
    {
      face : "http://placehold.it/150x150",
      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    },
    {
      face : "http://placehold.it/150x150",
      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    },
    {
      face : "http://placehold.it/150x150",
      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    },
    {
      face : 'http://placehold.it/150x150',
      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }
  ];

};