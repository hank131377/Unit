const { gulp, autoprefixer, $, sass, options, cleanCSS } = require('./modules')

module.exports = () => {
  const plugins = [autoprefixer()]
  return gulp
    .src('./source/scss/**/*.scss')
    .pipe($.sourcemaps.init())
    .pipe(
      sass({
        includePaths: ['./node_modules/bootstrap/scss'],
      }).on('error', sass.logError)
    )
    .pipe($.postcss(plugins))
    .pipe($.if(options.env === 'prod', cleanCSS()))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./public/css'))
}
