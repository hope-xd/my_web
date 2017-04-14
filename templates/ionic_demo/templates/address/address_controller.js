angular.module('address.controller', [])

.controller('AddressCtrl', ['$scope', '$state','AddressFty','GlobalVariable',function($scope,$state,AddressFty,GlobalVariable) {
	$scope.messages = [];
	var promise = AddressFty.crossGetData();
	promise.then(function(data) {
		$scope.messages = data.messages;
		$scope.go_messageId = function(e) {
				 $state.go("message/:messageId"); 
			};
	},function(reason) {
		console.log(reason);
	})
}]);
