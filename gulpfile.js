var gulp            = require('gulp');
/*************** Global ***************/
var concat          = require('gulp-concat');
var browserSync     = require('browser-sync').create();
var watch           = require('gulp-watch');
var cache           = require('gulp-cached');
var flatten         = require('gulp-flatten');
var inject          = require('gulp-inject');
var plumber         = require('gulp-plumber');
var gulpUtil        = require('gulp-util');
var gulpIf          = require('gulp-if');
var runSequence     = require('run-sequence');
/*************** CSS ***************/
var postcss         = require('gulp-postcss');
var cssnext         = require('postcss-cssnext');
var sass            = require('gulp-sass');
var groupQueries    = require('gulp-group-css-media-queries');
var sassLint        = require('gulp-sass-lint');
var cleanCSS        = require('gulp-clean-css');
/*************** JS ***************/
var merge2          = require('merge2');
var babel           = require('gulp-babel');
var uglify          = require('gulp-uglify');
/*************** Nunjucks | HTML ***************/
var nunjucks        = require('gulp-nunjucks-html');
var htmlBeautify    = require('gulp-html-beautify');
/*************** Images ***************/
var imagemin        = require('gulp-imagemin');
/*************** Paths ***************/
var paths           = require('./gulp.paths.json');


//===============================================
//                            Tratamento de erros
//===============================================
var bool_cached = true;
const onError = function(error) {
    let message = error.message.split('Error:')
        message = message.length > 1 ? message[1] : message[0]
        message = message.replace('unknown path', error.fileName)

    gulpUtil.beep();
    gulpUtil.log(gulpUtil.colors.red(`Error: ${message}`));
}


//===============================================
//                                   Browser Sync
//===============================================
gulp.task('sync', function() {
    browserSync.init({
        server: { baseDir: "./dist" }
    })
})

gulp.task('browsersync:reload', function() {
    browserSync.reload();
})


//===============================================
//                               Stylesheet | CSS
//===============================================
gulp.task('sass-lint', function() {
    return gulp.src( paths.src.css.all )
        .pipe(sassLint({ configFile: '.sass-lint.yml' }))
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError())
})

gulp.task('css', function() {
    return gulp.src( paths.src.css.files )
        .pipe(plumber({ errorHandler: onError }))
        .pipe(sass({ includePaths: paths.src.css.imports }))
        .pipe(groupQueries())
        .pipe(postcss([ cssnext({ browsers: ['last 10 versions'] }) ]))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(concat('bundle.min.css'))
        .pipe(gulp.dest( paths.dest.css ))
})


//===============================================
//                                JavaScript | JS
//===============================================
gulp.task('js', function() {
    return merge2(gulp.src(paths.src.js.dependencies),
        gulp.src(paths.src.js.files)
        .pipe(plumber({ errorHandler: onError }))
        .pipe(babel({ presets: ['env'] })))
        .pipe(uglify())
        .pipe(concat('bundle.min.js'))
        .pipe(gulp.dest( paths.dest.js ))
})


//===============================================
//                                       Nunjucks
//===============================================
gulp.task('nunjucks', function() {
    return gulp.src( paths.src.views.files )
        .pipe(gulpIf(bool_cached, cache('nunjucks')))
        .pipe(plumber({ errorHandler: onError }))
        .pipe(nunjucks({ searchPaths: paths.src.views.nunjucks, ext: ".html" }))
        .pipe(htmlBeautify({ max_preserve_newlines: 0 }))
        .pipe(gulp.dest( paths.dest.views ))
})

gulp.task('nunjucks:injects', function() {
    return gulp.src( paths.src.injects.html )
        .pipe(inject(gulp.src(paths.src.injects.files, {read: false}), {relative: true, removeTags: true}))
        .pipe(gulp.dest( paths.dest.views ))
})


//===============================================
//                                         Images
//===============================================
gulp.task('image', function() {
    return gulp.src( paths.src.img )
        .pipe(cache('images'))
        .pipe(flatten())
        .pipe(imagemin())
        .pipe(gulp.dest( paths.dest.img ))
})


//===============================================
//                                          Fonts
//===============================================
gulp.task('fonts', function() {
    return gulp.src( paths.src.fonts )
        .pipe(gulp.dest( paths.dest.fonts ))
});


//===============================================
//                                          Watch
//===============================================
gulp.task('watch', function() {
    gulp.watch(paths.src.img, function() { runSequence('image', 'browsersync:reload'); })
    gulp.watch(paths.src.js.files, function() { runSequence('js', 'browsersync:reload'); })
    gulp.watch(paths.src.fonts, function() { runSequence('fonts', 'browsersync:reload'); })
    gulp.watch(paths.src.css.all, function() { runSequence('sass-lint', 'css', 'browsersync:reload'); })
    gulp.watch(paths.src.views.files, function() { bool_cached = true; runSequence('nunjucks', 'nunjucks:injects', 'browsersync:reload'); })
    gulp.watch(paths.src.views.components, function() { bool_cached = false; runSequence('nunjucks', 'nunjucks:injects', 'browsersync:reload'); })
});


//===============================================
//                                  Tasks Default
//===============================================
gulp.task('default', function(callback) {
    runSequence('sass-lint', 'css', 'js', 'image', 'fonts', 'nunjucks', 'nunjucks:injects', 'watch', 'sync');
});
