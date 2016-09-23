var gulp = require('gulp');
var fs = require("fs");
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var sync = require('run-sequence');
var gutil = require('gulp-util');
var gulp = require('gulp');
var stripCssComments = require('gulp-strip-css-comments');

gulp.task('css', function() {
  return gulp.src([
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'public/css/body.css',
      'public/css/lists.css',
      'public/css/loader.css',
      'public/css/graphnav.css',
      'public/css/headline.css',
      'public/css/animations.css',
      'public/css/ani_elements.css',
      'public/css/nav.css',
      'public/css/details.css',
      'public/css/buttons.css'
    ])
    .pipe(stripCssComments())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('public/dist'))
});

gulp.task('scripts', function() {
  return gulp.src([
      'public/js//vendor/canvasjs.min.js',
      'public/dist/bundle.js'
    ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('public/dist'));
});
gulp.task('default', function(done) {
  sync('css', 'scripts', done);

});