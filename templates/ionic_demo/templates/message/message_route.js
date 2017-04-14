
angular.module('message.route',['message.controller','message.service'])
.config(function($stateProvider, $urlRouterProvider) {
   $stateProvider
      .state('message', {
        url: '/message/:messageId',
        templateUrl: 'templates/message/_address_message.html',
        controller: 'MessageCtrl'
      })
});