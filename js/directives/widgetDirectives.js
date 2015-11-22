angular.module('myApp')
.directive('animateText', function(){
	return function(scope, elem, attrs){
		$(function(){
			var delay = 100;
			$('.typed-intro').typed({
				strings: ['Independent ^1000', 'Confident ^'+delay, 'Strong ^'+delay, 'more adjectives ^'+delay],
				typeSpeed: 50,
				showCursor: true,
				cursorChar: '|'
			});

		});
	}
})