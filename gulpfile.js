"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");

function style(done) {
  return gulp
    .src("styles/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("styles"));
  done();
}
function watchS() {
  gulp.watch("styles/*.scss", style);
}
exports.style = style;
exports.watch = watchS;
