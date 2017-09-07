'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var responsive = require('gulp-responsive-images');
var imagemin = require('gulp-imagemin');


//Responsive Image (Resize and adjust quality)
gulp.task('resize', function () {
  gulp.src('./src/image/*.png')
    .pipe(responsive({
      'cloud-lower.png': [{
        width: 500,
        quality: 70,
        suffix: '-medium'
      }, {
        width: 250,
        quality: 60,
        suffix: '-small'
      }],
      'cloud-middle.png': [{
        width: 500,
        quality: 70,
        suffix: '-medium'
      }, {
        width: 250,
        quality: 60,
        suffix: '-small'
      }],
      'cloud-top.png': [{
        width: 500,
        quality: 70,
        suffix: '-medium'
      }, {
        width: 250,
        quality: 60,
        suffix: '-small'
      }],
      'gamearcade.png': [{
        width: 400,
        quality: 60,
        suffix: '-medium'
      }, {
        width: 300,
        quality: 33,
        suffix: '-small'
      }],
      'googlemap.png': [{
        width: 400,
        quality: 60,
        suffix: '-medium'
      }, {
        width: 300,
        quality: 33,
        suffix: '-small'
      }],
      'jasmine.png': [{
        width: 400,
        quality: 60,
        suffix: '-medium'
      }, {
        width: 300,
        quality: 33,
        suffix: '-small'
      }],
      'weboptimize.png': [{
        width: 400,
        quality: 60,
        suffix: '-medium'
      }, {
        width: 300,
        quality: 33,
        suffix: '-small'
      }],
      'skill_logo.png': [{
        width: 350,
        quality: 70,
        suffix: '-medium'
      }, {
        width: 200,
        quality: 60,
        suffix: '-small'
      }],
      'sparkleone.png': [{
        width: 400,
        quality: 70,
        suffix: '-medium'
      }, {
        width: 300,
        quality: 60,
        suffix: '-small'
      }],
      'sparkletwo.png': [{
        quality: 70,
        suffix: '-medium'
      }, {
        width: 200,
        quality: 60,
        suffix: '-small'
      }],
      'wood.png': [{
        quality: 60,
        suffix: '-medium'
      }, {
        quality: 50,
        suffix: '-small'
      }]
    }))
    .pipe(gulp.dest('./src/image/resized-image'));
});



//Minify images(runs on 2nd gulp command- after resize)
gulp.task('minify', function(){
  gulp.src('./src/image/resized-image/*')
      .pipe(imagemin())
      .pipe(gulp.dest('./src/dest/mini-image'));
});


// Sass
gulp.task('sass', function() {
  return gulp.src('./src/stylesheet/sass/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./src/stylesheet/css'));
});



gulp.task('watch', function () {
  gulp.watch('./src/stylesheet/sass/*.scss', ['sass']);
});


gulp.task('default', ['sass', 'watch', 'resize', 'minify']);
