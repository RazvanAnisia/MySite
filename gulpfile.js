var gulp = require("gulp"),
watch = require("gulp-watch"),
postcss = require("gulp-postcss"),
cssVars = require("postcss-simple-vars"),
nestedCSS= require("postcss-nested"),
cssImport = require("postcss-import"),
autoprefixer = require("autoprefixer");

gulp.task("default", function(){
	console.log("you created a gulp task")
})

gulp.task("html", function(){
	console.log("imagine something useful being done to your HMTL here")
})

gulp.task("styles", function(){
	return gulp.src("./app/assets/styles/**/*.css")
	.pipe(postcss([cssImport,nestedCSS,cssVars,autoprefixer]))
	.pipe(gulp.dest("./app/temp/styles"))
})

gulp.task("watch", function(){
	watch("./app/index.html", function(){
		gulp.start("html");
	});
	watch("./app/assets/styles/**/*.css", function(){
		gulp.start("styles")
	})
})