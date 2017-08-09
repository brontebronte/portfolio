'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('./src/stylesheet/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./src/stylesheet/css'));
});


gulp.task('watch', function () {
  gulp.watch('./src/stylesheet/sass/*.scss', ['sass']);
});


gulp.task('default', ['sass', 'watch']);
