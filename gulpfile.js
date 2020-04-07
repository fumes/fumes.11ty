'use strict';
// GULP tasks to work images.
var changeCase   = require('change-case');
var gulp         = require('gulp');
var rename       = require('gulp-rename');
var responsive   = require('gulp-responsive');

// WHAT: adds folder name + index, lowercasing the original file name.
// starts from 10, to avoid single digit no. to the first 9 jpgs
var index = 10;
gulp.task('curatename', function (done) {
  // put image folders w/ proper name into _images_to_rename
  return gulp.src("./src/uploads/_images_to_rename/**/*.jpg")
  .pipe(rename(function(fix) {
     fix.basename = changeCase.lowerCase(fix.basename);
   }))
  .pipe(rename(function (path) {
    // prefix w/ folder name + suffix w/ index (starting at 10!)
    path.basename =  (path.dirname + "-" + path.basename + "-" + index++);
  }))
  // output to _images_to_process folder for next step
  .pipe(gulp.dest("./src/uploads/_images_to_size/"));
});

// WHAT: adds folder name + index, deleting the original file name.
// start from 10, top avoid single digit no. to the first 9 jpgs
var index = 10;
gulp.task('rename', function (done) {
  // put image folders w/ proper name into _images_to_rename
  return gulp.src("./src/uploads/_images_to_rename/**/*.jpg")
  .pipe(rename(function (path) {
    // prefix w/ folder name + suffix w/ index (starting at 10!)
    path.basename =  (path.dirname + "-" + index++);
  }))
  // output to _images_to_process folder for next step
  .pipe(gulp.dest("./src/uploads/_images_to_size/"));
});

// Reponsive sizing w/ gulp4
// NOTE: Does transfer folder and lowercase the jpgs names
// OK!
gulp.task('sizes', function (done) {
  return gulp.src('./src/uploads/_images_to_size/**/*.jpg')
    .pipe(rename(function(fix) {
       fix.basename = changeCase.lowerCase(fix.basename);
     }))
    .pipe(responsive({
      '**/*.jpg': [{
        width: 640,
        quality: 55,
        progressive: true,
        sharper: true,
        rename: {
          suffix: '-640',
        }
      }, {
        width: 880,
        quality: 44,
        progressive: true,
        rename: {
          suffix: '-880'
        }
      }, {
        width: 1024,
        quality: 44,
        progressive: true,
        rename: {
          suffix: '-1024'
        }
      }, {
        //fullHD
        width: 1920,
        quality: 33,
        progressive: true,
        rename: {
          suffix: '-1920'
        }
      }, {
        //named same as original for use with jekyll_seo Open Graph / Twitter Cards
        width: 1024,
        quality: 44,
        progressive: true,
      }],
    }, {
      // global configuration for all images
      errorOnEnlargement: false,
      withMetadata: false,
      withoutEnlargement: false,
      withoutChromaSubsampling: true
    }))
    // puy jpgs ready in place for SSG to use
    .pipe(gulp.dest('./src/assets/p/'));
  done();
});


// Rename all to lowercase w/ gulp4
// OK!
gulp.task(function lower() {
  return gulp.src( './src/uploads/_images_to_lowercase/**/*.*' )
    .pipe(rename(function(fix) {
       fix.basename = changeCase.lowerCase(fix.basename);
     }))
    .pipe(gulp.dest( './src/uploads/_images_to_size' ));
});
