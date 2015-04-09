var gulp  = require('gulp'),
    gutil = require('gulp-util'),

    jshint     = require('gulp-jshint'),
    compass    = require('gulp-compass'),
    concat     = require('gulp-concat'),
    uglify     = require('gulp-uglify'),

    input  = {
      'html': 'source/*.html',
      'sass': 'source/sass/**/*.scss',
      'javascript': 'source/javascript/**/*.js'
    },

    output = {
      'html': 'dist',
      'stylesheets': 'dist/css',
      'javascript': 'dist/js'
    };

/* run javascript through jshint */
gulp.task('jshint', function() {
  return gulp.src(input.javascript)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

/* concat javascript files, minify if --type production */
gulp.task('build-js', function() {
  return gulp.src(input.javascript)
    .pipe(concat('app.js'))
    //only uglify if gulp is ran with '--type production'
    .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()) 
    .pipe(gulp.dest(output.javascript));
});

/* compile scss files */
gulp.task('build-css', function() {
  return gulp.src(input.sass)
    .pipe(compass({
      css: 'dist/css',
      sass: 'source/sass'
    }))
    .pipe(gulp.dest(output.stylesheets));
});

/* copy any html files to dist */
gulp.task('copy-html', function() {
  return gulp.src(input.html)
    .pipe(gulp.dest(output.html));
});

/* Watch these files for changes and run the task on update */
gulp.task('watch', function() {
  gulp.watch(input.javascript, ['jshint', 'build-js']);
  gulp.watch(input.sass, ['build-css']);
  gulp.watch(input.html, ['copy-html']);
});

/* run the watch task when gulp is called without arguments */
gulp.task('default', ['jshint', 'build-js', 'build-css', 'copy-html', 'watch']);
