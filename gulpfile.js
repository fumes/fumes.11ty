'use strict';
// GULP tasks to work images.
var changeCase   = require('change-case');
var gulp         = require('gulp');
var rename       = require('gulp-rename');
var responsive   = require('gulp-responsive');


// Reponsive sizing w/ gulp4
// NOTE: this does not create the destination dir for the work. Create it manually and move files inside. This task create jpgs in ./assets/p/
// OK!
gulp.task('jpgs', function (done) {
  return gulp.src('./_src/upload/_p_to_process/*.jpg')
    .pipe(responsive({
      '*.jpg': [{
        width: 640,
        quality: 55,
        progressive: true,
        sharper: true,
        rename: {
          suffix: '-640'
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
      withoutEnlargement: false
    }))
    .pipe(gulp.dest('./_src/assets/p/_p_resized/'));
  done();
});


// Rename all to lowercase w/ gulp4
// OK!
gulp.task(function lower() {
  return gulp.src( './_src/uploads/_p_to_lowercase/*.*' )
    .pipe(rename(function(fix) {
       fix.basename = changeCase.lowerCase(fix.basename);
     }))
    .pipe(gulp.dest( './_src/uploads/_p_lowercased' ));
});
