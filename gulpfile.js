var gulp = require('gulp');
var tslint = require('gulp-tslint');
var ts = require('gulp-typescript');
var runSequence = require('run-sequence').use(gulp);

var browserify  = require('browserify'),
    transform   = require('vinyl-transform'),
    uglify      = require('gulp-uglify'),
    sourcemaps  = require('gulp-sourcemaps');

var tsProject = ts.createProject({
    removeComments : true,
    noImplicitAny : true,
    target : 'ES3',
    module : 'commonjs',
    declarationFiles : false
});

var tsTestProject = ts.createProject({
    removeComments : true,
    noImplicitAny : true,
    target : 'ES3',
    module : 'commonjs',
    declarationFiles : false
});


var browserified = transform(function(filename) {
  var b = browserify({ entries: filename, debug: true });
  return b.bundle();
});

gulp.task('bundle-js', function () {
  return gulp.src('./temp/source/js/main.js')
             .pipe(browserified)
             .pipe(sourcemaps.init({ loadMaps: true }))
             .pipe(uglify())
             .pipe(sourcemaps.write('./'))
             .pipe(gulp.dest('./dist/source/js/'));
});

gulp.task('bundle-test', function () {
  return gulp.src('./temp/test/**/**.test.js')
             .pipe(browserified)
             .pipe(gulp.dest('./dist/test/'));
});


gulp.task('tsc', function() {
return gulp.src('./source/ts/**/**.ts')
           .pipe(ts(tsProject))
           .js.pipe(gulp.dest('./temp/source/js'));
});

gulp.task('tsc-tests', function() {
  return gulp.src('./test/**/**.test.ts')
             .pipe(ts(tsTestProject ))
             .js.pipe(gulp.dest('./temp/test/'));
});

gulp.task('lint', function() {
  return gulp.src([
   './source/ts/**/**.ts', './test/**/**.test.ts'
  ]).pipe(tslint())
    .pipe(tslint.report('verbose'));
});

// Passing a callback (cb)
gulp.task('sync', function (cb) { // note the cb argument
    // setTimeout could be any async task
    setTimeout(function () {
        cb(); // note the cb usage here
    }, 1000);
});

// Returning a stream
gulp.task('sync', function () {
    return gulp.src('js/*.js') // note the return keyword here
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('../dist/js'))
});

gulp.task('secondTask', ['sync'], function () {
    // this task will not start until
    // the sync task is all done!
});

gulp.task('default', function(cb) {
  runSequence(
    'lint',                      // lint
    ['tsc', 'tsc-tests'],        // compile
    ['bundle-js','bundle-test'], // optimize
    //'karma',                      // test
    //'browser-sync',              // serve
    cb                           // callback
  );
});
