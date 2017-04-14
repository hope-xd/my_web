
angular.module('class.route',['class.controller','class.service'])
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('tab.class', {
    url: '/class',
    views: {
      'tab-class': {
        templateUrl: 'templates/class/tab-class.html',
        controller: 'ClassCtrl'
      }
    }
  });

});