 angular.module('message.controller', [])

.controller('MessageCtrl',['$scope','$state','$stateParams','$ionicHistory','$window','$ionicScrollDelegate','MessageFty','GlobalVariable',
	function($scope,$state,$stateParams,$ionicHistory,$ionicScrollDelegate,$window,MessageFty,GlobalVariable) {
		$scope.messages = [];
		$scope.chatBubble = [];
		$scope.chatBubbleItem;
		var promise = MessageFty.crossGetData();
		promise.then(function(data){
			$scope.messages = data.messages;
			$scope.messageId = $stateParams.messageId;
			// console.log($scope.messageId + 'hello');
			$scope.goBack=function(){
      			$ionicHistory.goBack();
    		};
			for(var i=0;i<$scope.messages.length;i++){
				$scope.chatBubble.push($scope.messages[i].message); 
			};
			$scope.messageItem = $scope.messages[$scope.messageId];
			$scope.chatBubbleItem = $scope.chatBubble[$scope.messageId];

			// console.log($scope.chatBubble);
			// console.log($scope.chatBubbleItem);
		},function(reason) {
			
		});
	

		
}]);
