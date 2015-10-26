import gulp from 'gulp';
import gutil from 'gulp-util';
import del from 'del';
import path from 'path';
import webpack from 'webpack';
import changed from 'gulp-changed';
import size from 'gulp-size';
import plumber from 'gulp-plumber';
import less from 'gulp-less';
import autoprefixer from 'gulp-autoprefixer';
import minifyCss from 'gulp-minify-css';
import browserSync from 'browser-sync';

const webpackConfig = require('./webpack.config.js');
let watch = false;
let started = false;

/**
 * 清理build资源
 */
gulp.task('clean', (callback)=> {
  del(['build/**/*.*'], callback)
});

/**
 * js bundle
 */
gulp.task('bundle', (cb) => {

  started = false;
  const myConfig = Object.create(webpackConfig);
  myConfig.watch = true;
  var compiler = webpack(myConfig);

  let bundle = (err, stats)=> {
    if (err) {
      throw new $.util.PluginError('webpack', err);
    }

    console.log(stats.toString({
      colors: true,
      hash: true,
      cached: true,
      chunkModules: false,
      cachedAssets: true
    }));

    if (!started) {
      started = true;
      return cb();
    }
  };

  if (watch) {
    compiler.watch(200, bundle);
  } else {
    compiler.run(bundle);
  }
});

/**
 * 启动server
 */
gulp.task('server', function () {
  watch = true;

  browserSync({
    server: "build",
    logPrefix: 'app',
    notify: true
  });

  process.on('exit', function () {
    browserSync.exit()
  });

});

gulp.task('watch', ()=> {

  gulp.watch('src/assets/img/**/*.*', ['img']);
  gulp.watch('src/index.html', ['html']);
  gulp.watch('src/assets/js/**/*.*', ['js']);
  gulp.watch(["src/assets/less/**/*.*"], ["less"]);
  gulp.watch(["src/assets/css/**/*.*"], ["css"]);
  gulp.watch(["src/app/**/*"], ["bundle"]);
  gulp.watch('build/**/*.*').on('change', browserSync.reload);

});

gulp.task('html', ()=> {
  return gulp.src(['src/index.html'])
    .pipe(size())
    .pipe(gulp.dest('build'));
});

gulp.task('img', ()=> {
  return gulp.src(['src/assets/img/**/*.*'])
    .pipe(size())
    .pipe(gulp.dest('build/img'));
});

gulp.task('css', ()=> {
  return gulp.src(['src/assets/css/**/*.css'])
    .pipe(minifyCss())
    .pipe(size())
    .pipe(gulp.dest('build/css'));
});

gulp.task('js', ()=> {
  return gulp.src(['src/assets/js/**/*.*'])
    .pipe(size())
    .pipe(gulp.dest('build/js'));
});

//style less
gulp.task('less', function () {

  gulp.src(['src/assets/less/**/*.less'])
    .pipe(plumber())
    .pipe(less())
    .pipe(autoprefixer({
      browsers: [
        'ie >= 10',
        'ie_mob >= 10',
        'ff >= 30',
        'chrome >= 34',
        'safari >= 7',
        'opera >= 23',
        'ios >= 7',
        'android >= 4.4',
        'bb >= 10'
      ]
    }))
    .pipe(size())
    .pipe(minifyCss())
    .pipe(gulp.dest('build/css'));
});


/** 默认启动*/
gulp.task('default', ['dev']);

/**开发模式*/
gulp.task('dev', ['build', 'watch', 'server']);

/**build*/
gulp.task("build", ['clean', 'img', 'css','less','js', 'html', 'bundle']);
