// require("time-require");

const gulp          = require('gulp');
// const del           = require('del');
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

gulp.task('sass', () => {
    return gulp.src('src/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass(/*{outputStyle: 'compressed'}*/).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('dist/sass'))
        .pipe(browserSync.stream());
});

gulp.task('copy', () => {
    return gulp.src(['!src/js/plugins/**/*.js', 'src/**/*.+(html|js|pde)'])
        .pipe(useref())
        .pipe(gulpif('*.js', sourcemaps.init()))
        .pipe(gulpif('*.js', babel({
            presets: ['env'],
            // compact: true
            ignore: ['src/js/plugins/**/*.js']
        })))
        // .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.js', sourcemaps.write('.')))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
});

gulp.task('img',() =>{
    return gulp.src('src/img/**/*')
        .pipe(imagemin([
            // imagemin.optipng({optimizationLevel: 2})
        ]))
        .pipe(gulp.dest('dist/img'));
})

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
    gulp.watch('src/**/*.+(html|js|pde)', ['copy']);
});

gulp.task('default', ['copy', 'sass', 'watch']);