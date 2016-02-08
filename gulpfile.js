var gulp = require('gulp');
var tsc = require('gulp-tsc');

var BUILD_DIR = 'build';

gulp.task('typescript', function() {
	return gulp.src('src/ts/**/*.ts')
    .on('change', function(file) { console.log(file + " changed."); })
    .pipe(tsc({ out: "rshadows.js" }))
    .on('error', function(error) { console.log(error); })
	.pipe(gulp.dest(BUILD_DIR + '/js'));

});
gulp.task('watch-ts', function() {
    gulp.watch('src/ts/**/*.ts', ['typescript']);
});
gulp.task('html', function() {
    return gulp.src('src/html/*.html')
    .pipe(gulp.dest(BUILD_DIR));
});
gulp.task('watch-html', function() {
    gulp.watch('src/html/**/*.html', ['html']);
});
gulp.task('lib', function() {
    return gulp.src('bower_components/rot.js/rot.js')
    .pipe(gulp.dest(BUILD_DIR + '/lib'));
});
gulp.task('default', ['typescript', 'html', 'lib', 'watch-ts', 'watch-html']);