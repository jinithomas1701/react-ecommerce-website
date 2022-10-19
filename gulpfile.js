const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();


// compile scss into css

function style() {
    //1. where is my sass file
    return gulp.src('./')
    //2. pass that file through sass compiler
    //3. where do i save the compiled CSS?
}