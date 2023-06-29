const { gulp } = require('./modules')

module.exports = () => {
  return gulp.src('./source/**/*.html').pipe(gulp.dest('./public/'))
}
