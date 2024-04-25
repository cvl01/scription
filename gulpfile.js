const gulp = require('gulp');
const replace = require('gulp-replace');
require('dotenv').config();

gulp.task('html', function () {
    return gulp.src('src/index.html') // Path to your HTML file
        .pipe(replace('{{APP_DOMAIN}}', process.env.APP_DOMAIN))
        .pipe(gulp.dest('.'));
});

gulp.task('default', gulp.series('html'));