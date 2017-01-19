var gulp = require('gulp');

var clean = require('gulp-clean');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var	compileCss = require('gulp-ruby-sass');
var minifyCss = require('gulp-minify-css');

// Delete the dist directory
// gulp.task('clean', function() {
	// return gulp.src('public')
	// .pipe(clean())
// });

// Process "app/""  JS files, (test, ) mimnify and concatenate them into one output file
gulp.task('app', function() {
	gulp.src('public/app/js/**/*.js')
	//.pipe(jshint())
	//.pipe(jshint.reporter('default'))
//	.pipe(uglify())
	.pipe(concat('app.main.js'))
	.pipe(gulp.dest('src/js/app'));
});

// gallery JS files, (test, ) mimnify and concatenate them into one output file
gulp.task('appgallery', function() {
	gulp.src('public/gallery/src/js/**/*.js')
	//.pipe(jshint())
	//.pipe(jshint.reporter('default'))
//	.pipe(uglify())
	.pipe(concat('appgallery.main.js'))
	.pipe(gulp.dest('src/js/app'));
});

// Script JS files, (test, ) mimnify and concatenate them into one output file
gulp.task('appscript', function() {
	gulp.src('public/scripts/**/*.js')
	//.pipe(jshint())
	//.pipe(jshint.reporter('default'))
//	.pipe(uglify())
	.pipe(concat('appscript.main.js'))
	.pipe(gulp.dest('src/js/app'));
});

// Process "assets/" SASS files, minify and concatenate them into one output file
gulp.task('assetssass', function () {
  return compileCss('public/asset/styles/scss/*.scss')
    .on('error', compileCss.logError)
    .pipe(minifyCss({compatibility: 'ie8'}))
	.pipe(concat('app.assetstyles.min.css'))
    .pipe(gulp.dest('src/css'))
});

// Process "styles" SASS files, minify and concatenate them into one output file
gulp.task('gallerynormalizesass', function () {
  return compileCss('public/gallery/src/scss/normalize.scss')
    .on('error', compileCss.logError)
    .pipe(minifyCss({compatibility: 'ie8'}))
	.pipe(concat('app.gallerynormalisesass.min.css'))
    .pipe(gulp.dest('src/css'))
});

gulp.task('gallerycyclersass', function () {
  return compileCss('public/gallery/src/scss/cycler.scss')
    .on('error', compileCss.logError)
    .pipe(minifyCss({compatibility: 'ie8'}))
	.pipe(concat('app.gallerycyclersass.min.css'))
    .pipe(gulp.dest('src/css'))
});

// A development task to run anytime a file changes
gulp.task('watch', function() {
	gulp.watch('public/app/js/**/*.js', ['app']);
	gulp.watch('public/gallery/src/js/**/*.js', ['appgallery']);
	gulp.watch('public/scripts/**/*.js', ['appscript']);
	gulp.watch('public/gallery/src/scss/normalize.scss', ['gallerynormalizesass']);
	gulp.watch('public/gallery/src/scss/cycler.scss', ['gallerycyclersass']);
});

// Define the default task as a sequence of the above tasks
// gulp.task('default', ['clean', 'app', 'sass', 'watch']);
gulp.task('default', ['app','appgallery','appscript','assetssass', 'gallerynormalizesass', 'gallerycyclersass','watch']);