/*eslint-env node*/
var gulp = require('gulp');
var bs = require('browser-sync').create();
var usemin = require('gulp-usemin');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var imagemin=require('gulp-imagemin');
var fontSpider = require('gulp-font-spider');
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
    gulp.watch('./src/fonts/*.*',['font','fontspider']);
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

//font任务，从app复制字体到dist
gulp.task('font', function() {
    return gulp.src('./src/fonts/*.*')
              .pipe(gulp.dest('./dist/fonts'))
              .pipe(bs.stream());
});
// fontspider任务，在dist中压缩字体文件并替换。成功后会发现dist/fonts中的字体文件比app/fonts中的小了很多
gulp.task('fontspider', function() {
    return gulp.src('./dist/*.html')  //只要告诉它html文件所在的文件夹就可以了，超方便
        .pipe(fontSpider());
});
