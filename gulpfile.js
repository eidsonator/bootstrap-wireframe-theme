var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename');

gulp.task('sass', function() {
    gulp.src('./src/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({format: 'beautify'}))
        .pipe(rename('bootstrap-wireframes.css'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('minify-css', () => {
    gulp.src('./dist/bootstrap-wireframes.css')
      .pipe(cleanCSS())
      .pipe(rename('bootstrap-wireframes.min.css'))
      .pipe(gulp.dest('./dist/'));
  });

  gulp.task('build', ['sass', 'minify-css'])
