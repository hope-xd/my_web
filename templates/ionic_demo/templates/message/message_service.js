angular.module('message.service', [])

  .factory('MessageFty', function($http,$q) {
   	return {
   		crossGetData:function(){
			var deferred = $q.defer();
			var url = '../../data/messages.json';
			$http.get(url).success(function(data,status,config,headers){
				deferred.resolve(data);
			}).error(function(reason,status,config,headers){
				deferred.reject(reason);
			});
			return deferred.promise;
		},
   	};
  });
//geData:function(messageId){
//var deferred = $q.defer();
// $http.get('localhost:8080'+'?messageId='+messageId).success(function(data,status,config,headers){
// deferred.resolve(data);
// }).error(function(data,status,config,headers){
//	deferred.reject(data);
//});
//return deferred.promise;
// },

/*
testPromise:function(messageId){
	var deferred = $q.defer();
	setTimeout(function(){
		console.log('111');
	},4000);
	return deferred.promise;
}
*/

/*
crossGetData:function(){
	var deferred = $q.defer();
	var url = '../../data.message.json'
	$http.jsonp(url).success(function(data,status,config,headers){
		deferred.resolve(data);
	}).error(function(reason,status,config,headers){
		deferred.reject(reason);
	});
	return deferred.promise;
},

*/