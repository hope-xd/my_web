
angular.module('chats.route',['chats.controller','chats.service'])
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('tab.chats', {
    url: '/chats',
    views: {
      'tab-chats': {
        templateUrl: 'templates/chats/tab-chats.html',
        controller: 'ChatsCtrl'
      }
    }
  });

});