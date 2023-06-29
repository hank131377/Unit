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

module.exports = { gulp, autoprefixer, $, series, sass, options, cleanCSS }
