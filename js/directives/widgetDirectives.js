angular.module('myApp')
.directive('animateText', function(){
	return function(scope, elem, attrs){
		$(function(){
			$('.typed-intro').typed({
				strings: ['Independent ^1000', 'Confident ^1000', 'Strong ^1500' 'more adjectives ^1000'],
				typeSpeed: 100
			});

		});
	}
})