const gulp = require('gulp')
const jade = require('gulp-jade')
const sass = require('gulp-sass')(require('sass'))

// gulp.task('copyHTML', () =>
//   gulp.src('./source/**/*.html').pipe(gulp.dest('./public/'))
// )

const copyHTML = () => {
  return gulp.src('./source/**/*.html').pipe(gulp.dest('./public/'))
}

exports.copyHTML = copyHTML

// gulp.task('jade', () => {
//   gulp
//     .src('./source/*.jade')
//     .pipe(
//       jade({
//         pretty: true,
//       })
//     )
//     .pipe(gulp.dest('./public/'))
// })

const exportJade = () => {
  return gulp
    .src('./source/*.jade')
    .pipe(
      jade({
        pretty: true,
      })
    )
    .pipe(gulp.dest('./public/'))
}

exports.exportJade = exportJade

function style() {
  return gulp
    .src('./source/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'))
}
exports.style = style

function watch() {
  gulp.watch('./source/scss/**/*.scss', style)
}

exports.watch = watch
