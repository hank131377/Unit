const { gulp, $, options } = require('./modules')

module.exports = () => {
  return gulp
    .src('./source/js/**/*.js')
    .pipe($.sourcemaps.init())
    .pipe(
      $.babel({
        presets: ['@babel/env'],
      })
    )
    .pipe($.concat('all.js'))
    .pipe($.if(options.env === 'prod', $.uglify()))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./public/js'))
}
