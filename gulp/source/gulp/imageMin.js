const { gulp, $, options } = require('./modules')

module.exports = () => {
  return gulp
    .src('./source/images/*')
    .pipe($.if(options.env === 'prod', $.imagemin()))
    .pipe(gulp.dest('./public/images'))
}
