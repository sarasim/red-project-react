// 'use strict';
//plugins

var gulp = require('gulp');
var browserify = require('gulp-browserify');
var browserSync = require('browser-sync');
var babelLoader = require ('babel-loader');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var webpack = require('webpack-stream');

var sass = require('gulp-sass');
    minifyCSS = require('gulp-minify-css');
    rename = require('gulp-rename');

//paths

// var jsMain
// var sassMain
// var htmlPath
//
// var basePath
// var buildPath


// gulp.task('compile-react', function() {
// 	return gulp.src('main.jsx')
// 	  .pipe(plumber())
// 		.pipe(babel({
// 			presets: ['es2015', 'react']
// 		}))
// 		.pipe(browserify({
// 			insertGlobals: true,
// 			debug: true
// 		}))
// 		.pipe(gulp.dest('./build'));
// });

gulp.task('compile-js', function() {
        gulp.src('./main.jsx')
          .pipe(webpack({
            output: {
              filename: 'main.js'
            },
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
          .pipe(gulp.dest('./build/js'));
});

gulp.task('sass', function(){
  gulp.src('./scss/styles.scss')
  .pipe(sass())
   .pipe(autoprefixer({
     browsers: ['last 2 versions']
   }))
  .pipe(minifyCSS())
  .pipe(rename('style.min.css'))
  .pipe(gulp.dest('./build/css'));
  });

gulp.task('browser-sync', ['compile-js'], function() {

	browserSync.init({
		server: './'
	});


  gulp.watch(['./scss/*.scss'], ['sass']);
	gulp.watch(['main.jsx'], ['compile-js']);
	gulp.watch(['./build/main.js', 'index.html', './build/css/style.min.css']).on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync', 'sass']);
