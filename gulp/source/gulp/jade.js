const { gulp, $ } = require('./modules')

module.exports = () => {
  return gulp
    .src('./source/*.jade')
    .pipe(
      $.jade({
        pretty: true,
      })
    )
    .pipe(gulp.dest('./public/'))
}
