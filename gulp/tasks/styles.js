var gulp = require("gulp"),
postcss = require("gulp-postcss"),
cssVars = require("postcss-simple-vars"),
nestedCSS= require("postcss-nested"),
cssImport = require("postcss-import"),
mixins = require("postcss-mixins"),
autoprefixer = require("autoprefixer");

gulp.task("styles", function(){
	return gulp.src("./app/assets/styles/**/*.css")
	.pipe(postcss([cssImport, mixins, cssVars, nestedCSS, autoprefixer]))
	.on("error",function(errorInfo){
		console.log(errorInfo.toString())
		this.emit("end");
	})
	.pipe(gulp.dest("./app/temp/styles"))
})
