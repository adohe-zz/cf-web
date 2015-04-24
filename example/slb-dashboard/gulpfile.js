'use strict';

var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    del = require('del'),
    sass = require('gulp-sass'),
    ngHtml2Js  = require('gulp-ng-html2js'),
    concat = require('gulp-concat');

// Clean task
gulp.task('clean', function(cb) {
  del([
    '.tmp/**',
    '.sass-cache/**',
    'public/javascrpts/**',
    'public/stylesheets/*',
    'index.html'
  ], { force: true }, cb);
});

/**
* Clean post dist files
*/
gulp.task('clean:postdist', function(cb) {
  del([
    'app/compiled/main.css',
    'app/compiled/templates-html.js'
    ], cb);
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
        .pipe(gulp.dest('app/compiled'));

  return slbStream;
});

/**
* Contact CSS Task
*/
gulp.task('concat:css', ['sass'], function(cb) {
  return gulp.src(['app/cf-web/cf.css', 'app/compiled/main.css'])
          .pipe(concat('index.css'))
          .pipe(gulp.dest('public/stylesheets'));
});

/**
* Compile HTML templates to JS
* using Angular's $templateCache
*/
gulp.task('html2js:views', function() {
  return gulp.src(['app/page/**/*.html', 'app/ui/*.html', 'app/module/*.html'])
  .pipe(ngHtml2Js({
    moduleName: 'slb-templates-html',
    rename: function(moduleName) {
      return '/slb.ui/' + moduleName;
    }
  }))
  .pipe(concat('templates-html.js'))
  .pipe(gulp.dest('app/compiled'));
});

/**
* Concat APP.JS task
*/
gulp.task('concat:app', ['html2js:views'], function() {
    return gulp.src([
      'app/compiled/templates-html.js',
      'app/slb-dashboard.js',
      'app/module/*.js',
      'app/page/**/*.js',
      'app/ui/*.js'
    ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('public/javascripts'));
});

/*
* Concat DEPS.JS task
*/
gulp.task('concat:deps', function() {
    return gulp.src([
      'bower_components/**/*.js',
      'app/cf-web/cf.min.js'
    ])
    .pipe(concat('deps.js'))
    .pipe(gulp.dest('public/javascripts'));
});

/**
* Concat JS task
*/
gulp.task('concat:js', ['concat:app', 'concat:deps']);

/**
* Combined concat task
*/
gulp.task('concat', ['concat:css', 'concat:js']);

/**
* Copy fonts
*/
gulp.task('copy:fonts', function() {
  return gulp.src('app/cf-web/fonts/*')
    .pipe(gulp.dest('public/cf-web/fonts'));
});

/**
* Copy images
*/
gulp.task('copy:images', function() {
  return gulp.src('app/cf-web/img/*')
  .pipe(gulp.dest('public/cf-web/img'));
});

/*
* Copy index
*/
gulp.task('copy:index', function() {
    return gulp.src('app/index.html')
    .pipe(gulp.dest(''));
});

/*
* Combined copy task
*/
gulp.task('copy', ['copy:fonts', 'copy:images', 'copy:index']);

/**
* Compile all prod assets
*/
gulp.task('compile:prod', ['concat', 'copy']);

// Package task
gulp.task('package', function(cb) {
  // run in-order
  runSequence(
    'clean',
    'compile:prod',
    'clean:postdist',
  cb);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['package']);
