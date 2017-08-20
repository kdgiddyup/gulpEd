'use strict';

var gulp = require("gulp");
var sass = require("gulp-sass");

// basic structure of a gulp task

gulp.task('hello', function() {
    // Stuff here
    console.log("Hello, Kelly!");
  });

// let's try compiling sass
// task is named "sass"
//callback function returns source scss files compiled into css by the gulp-sass plug-in
gulp.task("sass", function() {
    return gulp.src("scss/**/*.scss")
    .pipe(sass().on("error",sass.logError))
    .pipe(gulp.dest('app/css'));
});