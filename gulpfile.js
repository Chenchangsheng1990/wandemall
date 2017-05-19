var gulp = require("gulp"),
	cleanCss = require("gulp-clean-css"),
	uglify = require("gulp-uglify"),
	reload = require("gulp-livereload");

// 创建一个 GULP 的默认任务
gulp.task("default", function(){
	console.log("test gulp...............");
});

// 创建一个用于处理 CSS 的任务
gulp.task("clean-css", function(){
	gulp.src("css/*.css")
		.pipe(cleanCss())
		.pipe(gulp.dest("dist"))
		.pipe(reload())
});

// 创建一个用于处理JS的任务
gulp.task("uglify", function(){
	gulp.src("js/*.js")
		.pipe(uglify())
		.pipe(gulp.dest("dist/js"));
});

// 创建用于编译SASS的任务
gulp.task("sass", function(){
	gulp.src("sass/*.scss")
		.pipe(sass())
		.pipe(gulp.dest("dist/css"))
		.pipe(reload());
});

// 创建用于自动刷新页面的任务
gulp.task("reload", function(){
	reload.listen();
	gulp.watch("css/*.css", ["clean-css"]);
});