var gulp = require('gulp');

var clean = require('gulp-clean');
// var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var	compileCss = require('gulp-ruby-sass');
var minifyCss = require('gulp-minify-css');
// var imagemin = require('gulp-imagemin');

// Delete the dist directory
gulp.task('clean', function() {
	return gulp.src('public')
	.pipe(clean())
});

// Process "app/"" and "assets/"" JS files, (test, ) mimnify and concatenate them into one output file
gulp.task('app', function() {
	gulp.src('app/**/*.js')
	//.pipe(jshint())
	//.pipe(jshint.reporter('default'))
//	.pipe(uglify())
	.pipe(concat('app.min.js'))
	.pipe(gulp.dest('public/scripts'));
});

// Process "assets/" SASS files, minify and concatenate them into one output file
gulp.task('sass', function () {
  return compileCss('assets/css/scss/*.scss')
    .on('error', compileCss.logError)
    .pipe(minifyCss({compatibility: 'ie8'}))
	.pipe(concat('styles.min.css'))
    .pipe(gulp.dest('public/styles'))
});

/*
// Imagemin images and ouput them in dist
gulp.task('imagemin', ['clean'], function() {
 gulp.src(paths.images, {cwd: bases.app})
 .pipe(imagemin())
 .pipe(gulp.dest(bases.dist + 'images/'));
});
*/

/*
// Copy all other files to dist directly
gulp.task('copy', ['clean'], function() {
	// Copy html
	gulp.src(paths.html, {cwd: bases.app})
	.pipe(gulp.dest(bases.dist));
	
	// Copy styles
	gulp.src(paths.styles, {cwd: bases.app})
	.pipe(gulp.dest(bases.dist + 'styles'));
	
	// Copy lib scripts, maintaining the original directory structure
	gulp.src(paths.libs, {cwd: 'app/**'})
	.pipe(gulp.dest(bases.dist));
	
	// Copy extra html5bp files
//	gulp.src(paths.extras, {cwd: bases.app})
//	.pipe(gulp.dest(bases.dist));
});
*/

// A development task to run anytime a file changes
gulp.task('watch', function() {
	gulp.watch('app/**/*.js', ['app']);
	gulp.watch('assets/**/*.scss', ['sass']);
});

// Define the default task as a sequence of the above tasks
gulp.task('default', ['clean', 'app', 'sass', 'watch']);