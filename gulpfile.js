'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('./src/stylesheet/sass/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./src/stylesheet/css'));
});

gulp.task('sassIndex', function() {
  return gulp.src('./public/stylesheet/scss/loader.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public/stylesheet/css'));
});


gulp.task('watch', function () {
  gulp.watch('./src/stylesheet/sass/*.scss', ['sass']);
  gulp.watch('./public/stylesheet/scss/*.scss', ['sassIndex']);
});


gulp.task('default', ['sass', 'sassIndex', 'watch']);
