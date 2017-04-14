
angular.module('route',[
	'tabs.route',
  'chats.route','address.route',
  'class.route','teach.route',
  'mine.route','message.route'
  ])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/tab/chats');

});