'use strict';

var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    del = require('del'),
    sass = require('gulp-sass'),
    contact = require('gulp-contact');

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
          includePaths: ['app/module', 'app/page'],
          outputStyle: 'nested'
        }))
        .pipe(gulp.dest('public/stylesheets'));

  return slbStream;
});

/**
* Contact CSS Task
*/
gulp.task('contact:css', ['sass'], function(cb) {
  return gulp.src('public/stylesheets/*.css')
          .pipe(contact('index.css'))
          .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('contact:js', function(cb) {

});

gulp.task('contact', ['contact:css', 'contact:js']);

/**
* Compile all prod assets
*/
gulp.task('compile:prod', ['contact', 'copy']);

// Package task
gulp.task('package', function(cb) {
  // run in-order
  runSequence(
    'clean',
    'compile:prod',
    'clean:postdist'
  );
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['package']);
