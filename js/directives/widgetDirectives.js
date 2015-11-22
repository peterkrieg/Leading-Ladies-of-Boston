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
});

// can't get this to work...
// angular.module('myApp')
// .directive('defaultScroll', function(smoothScroll){
// 	return function(scope, elem, attrs){
// 		$(function(){
// 			var element = $elem[0];

// 			var options={
// 				duration: 100,
// 				easing: 'easeOutQuad',
// 				offset: 500
// 			};

// 			smoothScroll(element, options);


// 		});
// 	}
// })

