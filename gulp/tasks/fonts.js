'use strict';

var config = require('../config');
var gulp = require('gulp');

function fontsGulp() {

	// javascript
	gulp.src(['node_modules/gentelella/vendors/jquery/dist/jquery.min.js'])
	    .pipe(gulp.dest(config.dist + '/vendors/jquery/'));

	gulp.src(['node_modules/gentelella/vendors/bootstrap/dist/js/bootstrap.min.js'])
	    .pipe(gulp.dest(config.dist + '/vendors/bootstrap/js/'));

	gulp.src(['node_modules/gentelella/vendors/fastclick/lib/fastclick.js'])
	    .pipe(gulp.dest(config.dist + '/vendors/fastclick/lib/'));

	gulp.src(['node_modules/gentelella/vendors/nprogress/nprogress.js'])
	    .pipe(gulp.dest(config.dist + '/vendors/nprogress/'));

	gulp.src(['node_modules/gentelella/build/js/custom.min.js'])
	    .pipe(gulp.dest(config.dist + '/vendors/gentelella/js/'));

	// images
	gulp.src(['node_modules/gentelella/production/images/*'])
	    .pipe(gulp.dest(config.dist + '/images'));

	// images
	gulp.src(['app/images/*'])
	    .pipe(gulp.dest(config.dist + '/images'));

    // Font
	return gulp.src(['node_modules/gentelella/vendors/font-awesome/fonts/*','node_modules/gentelella/vendors/bootstrap/fonts/*'])
	    .pipe(gulp.dest(config.dist + '/fonts'));
}

module.exports = fontsGulp;
