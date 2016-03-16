// 'use strict';
//plugins

var gulp = require('gulp');
var browserify = require('gulp-browserify');
var browserSync = require('browser-sync');
var babelLoader = require ('babel-loader');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var webpack = require('webpack-stream');
var historyApiFallback = require('connect-history-api-fallback');

var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');

//paths

var jsMain = ['./src/main.jsx', './src/components/**/*.jsx'];
var sassMain = './src/scss/**/*.scss';
var htmlPath = './src/index.html';

var basePath = './src';
var buildPath = './build';


gulp.task('compile-react', function() {
        gulp.src(jsMain)
          .pipe(webpack({
            output: {
              filename: 'main.js'
            },
            debug: true,
            devtool: 'eval-source-map',
            module: {
              loaders: [{
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                  presets: ['react','es2015']
                }
              }]
            },
          }))
          .pipe(gulp.dest(buildPath));
});

gulp.task('sass', function(){
  gulp.src(sassMain)
  .pipe(sass())
  .pipe(minifyCSS())
  .pipe(rename('style.min.css'))
  .pipe(gulp.dest(buildPath));
  });

gulp.task('copy-html', function(){
  gulp.src(htmlPath)
  .pipe(gulp.dest(buildPath));
});

gulp.task('browser-sync', ['compile-react', 'copy-html', 'sass'], function() {
	browserSync.init({
		server: {
    baseDir: buildPath,
    middleware: [historyApiFallback()]
  }
	});


gulp.watch([jsMain], ['compile-react']);
gulp.watch([sassMain], ['sass']);
gulp.watch([htmlPath], ['copy-html']);
gulp.watch([buildPath+'/main.js', buildPath+'/index.html', buildPath+'/style.min.css']).on('change', browserSync.reload);

});

gulp.task('default',['browser-sync']);
