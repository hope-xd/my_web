


(function (angular) {
	'use strict';
	var http = angular.module('moviecat.services.http',[]);
	http.service('HttpService',['$window','$document',function($window,$document){
		
		this.jsonp = function(url,data,callback){

			// if(typeof data == function){
			// 	callback = data;
			// };
			var querystring = url.indexOf('?')==-1?'?':'&';
			for(var key in data){
				querystring += key + '=' + data[key] + '&';
			};
			var fnSuffix = Math.random().toString().replace('.','');
			var cbFunName = 'my_json_callback' + fnSuffix;
			
			querystring += 'callback=' + cbFunName;
			var scriptElement = $document[0].createElement('script');
			scriptElement.src = url + querystring;
			
			$window[cbFunName] = function(data){
				callback(data);
				$document[0].body.removeChild(scriptElement);
			};

			$document[0].body.appendChild(scriptElement);
	};
	}]);	
})(angular);
		

