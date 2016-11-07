var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    server = require('gulp-server-livereload');


//server
gulp.task('webserver', function() {
    gulp.src('app')
        .pipe(server({
            livereload: true,
            directoryListing: true,
            open: true
        }));
});


gulp.task('sass', function () {
    return gulp.src('./source/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./prod'));
});

gulp.task('scripts', function() {
    return gulp.src('./lib/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./prod/'));
});