/*eslint-env node*/
var gulp = require('gulp');
var bs = require('browser-sync').create();
var usemin = require('gulp-usemin');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var imagemin=require('gulp-imagemin');
gulp.task('server',['html','imgs'],function(){
    bs.init({
        server:{
            baseDir:'dist',
            directory:true
        },
        open:'external',
        browser:'google chrome'
    });
    gulp.watch(['./src/**/*.*','!./src/imgs/**/*.*'],['html']);
    gulp.watch(['./src/imgs/**/*.*'],['imgs']);
    gulp.watch('./dist/**/*.*',bs.reload);
});

// gulp.task('sass',function(){
//     return gulp.src([
//         './src/sass/**/*.scss',
//         '!./src/sass/**/_*.scss'])
//         .pipe(gulp.dest('./dist/css'));
// });

gulp.task('html',function(){
    return gulp.src(['./src/html/**/*.html','./src/index.html'])
  .pipe(usemin({
      sass:[sass],
      js:[uglify]
  }))
  .pipe(gulp.dest('./dist/'));
});

gulp.task('imgs',function(){
    return gulp.src('./src/imgs/**/*.*')
  .pipe(imagemin())
  .pipe(gulp.dest('./dist/imgs'));
});
