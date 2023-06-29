const { gulp, series } = require('./source/gulp/modules')

const clean = require('./source/gulp/clean')

exports.clean = clean

const copyHTML = require('./source/gulp/copeHTML')

exports.copyHTML = copyHTML

const jade = require('./source/gulp/jade')

exports.jade = jade

const style = require('./source/gulp/style')

exports.style = style

const babel = require('./source/gulp/babel')

exports.babel = babel

const imagesMin = require('./source/gulp/imageMin')

exports.imagesMin = imagesMin

const watch = () => {
  gulp.watch('./source/index.html', copyHTML)
  gulp.watch('./source/scss/**/*.scss', style)
  gulp.watch('./source/js/**/*.js', babel)
  gulp.watch('./source/images/*', imagesMin)
}

exports.watch = watch

exports.default = series(clean, copyHTML, style, babel, imagesMin, watch)
