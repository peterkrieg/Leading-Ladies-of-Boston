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
		'./bower_components/angular/angular.js',
		'./bower_components/angular-ui-router/release/angular-ui-router.js',
		'./js/app.js',
		'./js/controllers/*.js'


		])
	// .src('./js/lib/angular/angular.js')
	.pipe(ngAnnotate())
	.pipe(concat('all.js'))
	// .pipe(uglify())
	.pipe(gulp.dest('./js/scripts'))
});

gulp.task('default', ['javascript']);
