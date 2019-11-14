'use strict';

const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');

const config = {
  src: 'app',
  css: {
    watch: '/inc/scss/**/*.scss',
    src: '/inc/scss/main.min.scss',
    dest: '/inc/css'
  },
  html: {
    src: '/*.html'
  },
  js: {
    src: '/inc/js/*.js'
  }
};

gulp.task('build', function () {
  gulp.src(config.src + config.css.src)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer({
      remove: false
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.src + config.css.dest))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('watch', ['browserSync', 'build'], function () {
  gulp.watch(config.src + config.css.watch, ['build']);
  gulp.watch(config.src + config.html.src, browserSync.reload);
  gulp.watch(config.src + config.js.src, browserSync.reload);
});

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: config.src
    }
  });
});