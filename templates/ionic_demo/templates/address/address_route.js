
angular.module('address.route',['address.controller','address.service'])
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('tab.address', {
    url: '/address',
    views: {
      'tab-address': {
        templateUrl: 'templates/address/tab-address.html',
        controller: 'AddressCtrl'
      }
    }
  });

});