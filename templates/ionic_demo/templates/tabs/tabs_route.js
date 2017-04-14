// tab功能路由
angular.module('tabs.route', ['tabs.controller'])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs/tabs.html',
        controller:'TabsCtrl'
      })

  });
