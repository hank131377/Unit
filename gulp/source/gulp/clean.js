const { gulp, $ } = require('./modules')

module.exports = () => {
  return gulp.src('./public', { read: false, allowEmpty: true }).pipe($.clean())
}
