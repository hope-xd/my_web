angular.module('address.service', [])

  .factory('AddressFty', function($http,$q) {
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
