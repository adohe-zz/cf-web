'use strict';

var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    del = require('del'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat');

// Clean task
gulp.task('clean', function(cb) {
  del([
    '.tmp/**',
    '.sass-cache/**',
    'public/javascrpts/**',
    'public/stylesheets/*'
  ], { force: true }, cb);
});

/**
* SASS Compile Task
*/
gulp.task('sass', function() {
  var slbStream = gulp.src('app/main.scss')
        .pipe(sass({
          includePaths: ['app/cf-web/sass', 'app/cf-web/sass/mixin'],
          outputStyle: 'nested'
        }))
        .pipe(gulp.dest('public/stylesheets'));

  return slbStream;
});

/**
* Contact CSS Task
*/
gulp.task('concat:css', ['sass'], function(cb) {
  return gulp.src('public/stylesheets/*.css')
          .pipe(concat('main.css'))
          .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('concat', ['concat:css']);

/**
* Compile all prod assets
*/
gulp.task('compile:prod', ['concat']);

// Package task
gulp.task('package', function(cb) {
  // run in-order
  runSequence(
    'clean',
    'compile:prod',
  cb);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['package']);
