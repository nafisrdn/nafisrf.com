// require("time-require");

const gulp          = require('gulp');
const del           = require('del');
const sass          = require('gulp-sass');
const sourcemaps    = require('gulp-sourcemaps');
const autoprefixer  = require('gulp-autoprefixer');
const imagemin      = require('gulp-imagemin');
const useref        = require('gulp-useref');
const gulpif        = require('gulp-if');
const uglify        = require('gulp-uglify');
const babel         = require('gulp-babel');
const uncss         = require('gulp-uncss');
const browserSync   = require('browser-sync').create();
const concatVendor  = require('gulp-concat-vendor');
const plumber       = require('gulp-plumber');
const concat        = require('gulp-concat');
const insert        = require('gulp-insert');

gulp.task('sass', () => {
    return gulp.src('src/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'uncompressed'}).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('dist/sass'))
        .pipe(browserSync.stream());
});

gulp.task('html', () => {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
})

gulp.task('js', () => {
    return gulp.src(
        [
            'src/js/layouts/*.js',
            'src/js/_pages/**/*.js',
            'src/js/theme.js'
        ])
        .pipe(plumber())
        .pipe(concat('app.js'))
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
});

gulp.task('vendors', () => {
    return gulp.src(
        [
            'src/js/vendors/jquery.js',
            'src/js/vendors/*.js'
        ])
        .pipe(plumber())
        .pipe(concat('vendors.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('fonts', () => {
    return gulp.src('src/sass/2-base/fonts/**/*')
        .pipe(gulp.dest('dist/sass/fonts'));
})

gulp.task('img',() =>{
    return gulp.src('src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
})

gulp.task('clean', function () {
    return del(['dist/']);
});

gulp.task('serve', ()=>{
    browserSync.init({
        server: {
            baseDir: 'dist'
        },
        open: false,
        notify: false
    });
})

gulp.task('watch', ['serve', 'sass'], ()=>{
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('src/**/*.html', ['html']);
    gulp.watch(['src/js/theme.js' ,'src/js/layouts/*.js', 'src/js/_pages/**/*.js'], ['js']);
    gulp.watch('src/js/vendors/*.js', ['vendors']);
});

gulp.task('dist', ['img', 'fonts', 'html', 'sass', 'js', 'vendors']);
gulp.task('default', ['dist', 'watch']);