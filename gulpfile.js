const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', () => {
    return gulp.src(['./src/themes/*.scss', './src/default.scss'])
        .pipe(sass())
        .pipe(gulp.dest('dist'));
});