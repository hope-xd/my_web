
angular.module('teach.route',['teach.controller','teach.service'])
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('tab.teach', {
    url: '/teach',
    views: {
      'tab-teach': {
        templateUrl: 'templates/teach/tab-teach.html',
        controller: 'TeachCtrl'
      }
    }
  });

});