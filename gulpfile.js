var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var ngAnnotate = require('gulp-ng-annotate');

var watcher = gulp.watch(['./js/**/*.js'], ['default']);

watcher.on('change', function(event){
	console.log('File ' + event.path + ' was ' + event.type + ' at ' + new Date() + ' , running tasks...');
})


gulp.task('javascript', function() {
	gulp.src([
		'./bower_components/jquery/dist/jquery.js',
		'./bower_components/typed.js/js/typed.js',



		









		// './bower_components/bootstrap4/js/src/bootstrap.js',


		// loading each bootstrap JS component in right order
		'./bower_components/bootstrap-sass/assets/javascripts/bootstrap/affix.js',
		'./bower_components/bootstrap-sass/assets/javascripts/bootstrap/alert.js',
		'./bower_components/bootstrap-sass/assets/javascripts/bootstrap/button.js',
		'./bower_components/bootstrap-sass/assets/javascripts/bootstrap/carousel.js',
		'./bower_components/bootstrap-sass/assets/javascripts/bootstrap/collapse.js',
		'./bower_components/bootstrap-sass/assets/javascripts/bootstrap/dropdown.js',
		'./bower_components/bootstrap-sass/assets/javascripts/bootstrap/tab.js',
		'./bower_components/bootstrap-sass/assets/javascripts/bootstrap/transition.js',
		'./bower_components/bootstrap-sass/assets/javascripts/bootstrap/scrollspy.js',
		'./bower_components/bootstrap-sass/assets/javascripts/bootstrap/modal.js',
		'./bower_components/bootstrap-sass/assets/javascripts/bootstrap/tooltip.js',
		'./bower_components/bootstrap-sass/assets/javascripts/bootstrap/popover.js',







		// './bower_components/bootstrap-sass/assets/javascripts/bootstrap/*js',



		'./bower_components/angular/angular.js',
		'./bower_components/ngSmoothScroll/lib/angular-smooth-scroll.js',
		'./bower_components/angular-ui-router/release/angular-ui-router.js',







		//_________________________GSAP animation__________________________

		'./bower_components/gsap/src/uncompressed/TweenMax.js',

		//_________________________Scroll magic__________________________
		'./bower_components/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js',
		'./bower_components/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js',
		'./bower_components/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js',
		'./js/other/*.js',





		//_______My controllers, directives, app.js__________________________
		'./js/app.js',
		'./js/directives/*.js',
		'./js/controllers/*.js'


		])
	// .src('./js/lib/angular/angular.js')
	.pipe(ngAnnotate())
	.pipe(concat('all.js'))
	// .pipe(uglify())
	.pipe(gulp.dest('./js/scripts'))
});

gulp.task('default', ['javascript']);
