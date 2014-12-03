var gulp = require("gulp")  
var uglify = require("gulp-uglify")
var minify = require("gulp-minify")
var exec = require("child_process").exec
var src = "./es6string.js"
gulp.task("default",["test","build"])
gulp.task("test",function (done) {
	gulp.watch(src,function (event) {
		if (event.type == "changed") {
			exec("npm test",function (err,content) {
				if (err) {
					console.error(err)
				}else{
					console.log(content)
				}
				done()
			})
		}
	})
})
gulp.task("build",function () {
	gulp.src(src)
		.pipe(uglify())
		.pipe(minify())
		.pipe(gulp.dest("dist"))
})