const gulp = require("gulp"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  cssvars = require("postcss-simple-vars"),
  nested = require("postcss-nested"),
  cssimport = require("postcss-import"),
  mixins = require("postcss-mixins"),
  hexrgba = require("postcss-hexrgba");

gulp.task("styles", () => {
  return gulp
    .src("./css/styles/styles.css")
    .pipe(postcss([cssimport, mixins, cssvars, nested, hexrgba, autoprefixer]))
    .on("error", function(error) {
      console.log(error.toString());
      this.emit("end");
    })
    .pipe(gulp.dest("./temp/styles"));
});

// Top level gulp tasks
//  task  - defines tasks
//  src - points to files to use
//  dest - points to a folder to output
//  watch - watch files for changes
