var gulp = require('gulp');

var cssmin = require('gulp-cssmin');
// ファイルリネーム（.min作成用）
var rename = require('gulp-rename');
// ファイル結合
var concat = require('gulp-concat');
// js最小化
var jsmin = require('gulp-jsmin');
// エラーでも監視を続行させる
var plumber = require('gulp-plumber');

var sass = require('gulp-sass');
var cmq = require('gulp-merge-media-queries');
// add vender prifix
var autoprefixer = require('gulp-autoprefixer');
var cleanCss = require('gulp-clean-css');

gulp.task('sass', function() {
	gulp.src(['./_scss/**.scss'])
    .pipe(plumber({
      handleError: function(err) {
        console.log(err);
        this.emit('end');
      }
    }))
    .pipe(plumber())
    .pipe(sass())
    .pipe(cmq({
      log: true
    }))
    .pipe(autoprefixer())
    // .pipe(cleanCss())
		// .pipe(rename({suffix: '_min'}))
    .pipe(gulp.dest('./css'))
});
gulp.task('css_concat_min', function() {
  return gulp.src(['css/bizvektor_common.css','js/res-vektor/res-vektor.css','js/FlexSlider/flexslider.css'])
    .pipe(concat('bizvektor_common.css'))
    .pipe(cssmin())
    .pipe(rename({suffix: '_min'}))
    .pipe(gulp.dest('./css/'));
});

// ファイル結合
gulp.task('scripts', function() {
  return gulp.src(['js/FlexSlider/jquery.flexslider.js','js/master.js','js/res-vektor/res-vektor.js','js/jquery.cookie.js','js/jquery.flatheights.js'])
    .pipe(concat('biz-vektor.js')) // ファイル結合
    .pipe(gulp.dest('./js/'));
});
// js最小化
gulp.task('jsmin', function () {
  gulp.src('./js/biz-vektor.js')
  .pipe(plumber()) // エラーでも監視を続行
  .pipe(jsmin())
  .pipe(rename({suffix: '-min'}))
  .pipe(gulp.dest('./js'));
});



// Watch
gulp.task('watch', function() {
		gulp.watch('_scss/*.scss', ['sass']);
    gulp.watch('css/*.css', ['css_concat_min']);
    gulp.watch('js/master.js', ['scripts']);
    gulp.watch('js/biz-vektor.js', ['jsmin']);
});

gulp.task('default', ['scripts', 'jsmin', 'watch', 'css_concat_min']);
gulp.task('compile', ['scripts', 'jsmin', 'css_concat_min']);

// copy dist ////////////////////////////////////////////////

gulp.task('dist', function() {
	return gulp.src(
			[
				'./**/*.js',
				'./**/*.jpeg',
				'./**/*.jpg',
				'./**/*.png',
				'./**/*.gif',
				'./**/*.php',
				'./**/*.txt',
				'./**/*.css',
				'./**/*.scss',
				'./**/*.bat',
				'./**/*.rb',
				'./**/*.eot',
				'./**/*.svg',
				'./**/*.ttf',
				'./**/*.woff',
				'./**/*.md',
				'./**/*.woff2',
				'./**/*.otf',
				'./**/*.less',
				'./languages/**',
				'./libraries/**',
				"!./tests/**",
				"!./dist/**",
				"!./node_modules/**/*.*"
			], {
				base: './'
			}
		)
		.pipe(gulp.dest('dist/biz-vektor')); // distディレクトリに出力
});
