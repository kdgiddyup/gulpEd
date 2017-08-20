'use strict';

var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync").create()  ;

// basic structure of a gulp task

gulp.task('hello', function() {
    // Stuff here
    console.log("Hello, Kelly!");
  });

// let's try compiling sass
// task is named "sass"
//callback function returns source scss files (using node glob pattern matching) compiled into css by the gulp-sass plug-in
// also added pipe to browserSync to reload browser with 
gulp.task("sass", function() {
    return gulp.src("app/scss/**/*.scss")
    .pipe(sass().on("error",sass.logError))
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.reload({
        stream: true
    }));
});

// Gulp watch 
gulp.task("watch", ["browserSync","sass"], function() {
    gulp.watch("app/scss/**/*.scss", ["sass"]);
    gulp.watch('app/*.html', browserSync.reload); 
    gulp.watch('app/js/**/*.js', browserSync.reload); 
});

// spin up a server using Browser Sync
gulp.task("browserSync", function() {
    browserSync.init({
      server: {
        baseDir: "app"
      },
    })
  })