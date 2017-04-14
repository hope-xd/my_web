

(function (angular) {
	'use strict';

	angular.module('moviecat.directives.auto_focus',[])
	.directive('autoFocus',['$location',function($location){
		// Runs during compile
		var path=$location.path();
		return {
			restrict: 'A',
			link:function($scope,iElm,iAttrs,controller){
				$scope.$location = $location;
				$scope.$watch('$location',function(now){
					var aLink = iElm.children().attr('href');
					var type = aLink.replace(/#(\/.+?)\/\d+/,'$1');
					if(now.startsWith(type)){
						iElm.parent().children().removeClass('active');
						iElm.addClass('active');
					}
				});

				// iElm.on('click',function(){
				// 	iElm.parent().children().removeClass('active');
				// 	iElm.addClass('active');
				// });
			}
		};
	}])
})(angular);

			// name: '',
			// priority:1,
			// terminal:true,
			// scope:{}, {}=isolate,true=child,false/undefined
			// controller:function($scope,$element,$attrs,$transclude)
			// require:'ngMOdel',Array=multiple requires,?
			// restrict: // E = Element, A = Attribute, C = Class, M = Comment
			// template:'',
			// templateUrl:'',
			// replace:true,
			// transclude:true,
			// compile:function(tElement,tAttrs,function transclude(function))