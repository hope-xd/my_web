

(function (angular) {
	'use strict';
	
	angular.module(
		'moviecat.movie_list', [
		'ngRoute',
		'moviecat.services.http'
		])
	.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/:category/:page', {
	templateUrl: 'movie_list/view.html',
	controller: 'MoveListController'
	});
	}])

	.controller('MoveListController',[
		'$scope',
		'$route',
		'$routeParams',
		'HttpService',
		'AppConfig',
		function($scope,$route,$routeParams,HttpService,AppConfig){
			var count = AppConfig.pageSize;
			var page = parseInt($routeParams.page);
			var start = (page -1)*count;
			$scope.subjects = 'Loading';
			$scope.message = '';
			$scope.totalCount = 0;
			$scope.totalPages = 0;
			$scope.currentPage = page;
			HttpService.jsonp(
				AppConfig.listApiAddress+ $routeParams.category,
				{start:start,count:count,q:$routeParams.q},
				function(data){
					// console.log(data);
					$scope.subjects = data.subjects;
					$scope.title = data.title;
					$scope.totalCount = data.total;
					$scope.totalPages = Math.ceil($scope.totalCount/count);
					$scope.$apply('subjects');
			});
			$scope.go = function(page){
				if(page>=1 && page <=$scope.totalPages){
					$route.updateParams({page:page});
				};
			};


			/*var doubanApiAddress ='http://api.douban.com//v2/movie/in_theaters';
			$http.jsonp(doubanApiAddress).then(function(res){
				if(res.status == 200){
					$scope.subjects = res.data.subjects; 
				}else{
					$scope.message = '获取数据错误,错误信心：'+ data.status.Text;
				}
			},function(err){
				$scope.message = '获取数据错误,错误信心：'+ err.Text;
			});*/
	}]);

})(angular);

