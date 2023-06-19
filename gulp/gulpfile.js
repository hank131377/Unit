const gulp = require('gulp')
// load-plugins
const $ = require('gulp-load-plugins')()
const { series } = require('gulp')
// jade
// const jade = require('gulp-jade')
// sass
const sass = require('gulp-sass')(require('sass'))
// PostCSS
// const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
// babel
// const sourcemaps = require('gulp-sourcemaps');
// const babel = require('gulp-babel');
// const concat = require('gulp-concat');
// uglify
// const uglify = require('gulp-uglify');
// clean-css
const cleanCSS = require('gulp-clean-css')
// minimist + gulp-if
const minimist = require('minimist')

const envOptions = {
  string: 'env',
  default: { env: 'develop' },
}
const options = minimist(process.argv.slice(2), envOptions)

//clean
const clean = () => {
  return gulp.src('./public', { read: false }).pipe($.clean())
}

exports.clean = clean

const copyHTML = () => {
  return gulp.src('./source/**/*.html').pipe(gulp.dest('./public/'))
}

exports.copyHTML = copyHTML

const exportJade = () => {
  return gulp
    .src('./source/*.jade')
    .pipe(
      $.jade({
        pretty: true,
      })
    )
    .pipe(gulp.dest('./public/'))
}

exports.exportJade = exportJade

function style() {
  const plugins = [autoprefixer()]
  return gulp
    .src('./source/scss/**/*.scss')
    .pipe($.sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe($.postcss(plugins))
    .pipe($.if(options.env === 'prod', cleanCSS()))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./public/css'))
}
exports.style = style

const babel = () => {
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

exports.babel = babel

function watch() {
  gulp.watch('./source/index.html', copyHTML)
  gulp.watch('./source/scss/**/*.scss', style)
  gulp.watch('./source/js/**/*.js', babel)
}

exports.watch = watch

exports.default = series(copyHTML, style, babel)
