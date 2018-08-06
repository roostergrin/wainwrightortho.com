const gulp = require('gulp')
const runSequence = require('run-sequence')
const sassLint = require('gulp-sass-lint')

const client = {
  lint: {
    styles: {
      input: ['src/main.sass', 'src/**/*.{scss,sass}', '!src/sass/vendors/*.{scss,sass}']
    }
  },
  styles: {
    watch: ['src/main.sass', 'src/**/*.{sass,scss}']
  }
}

gulp.task('default', (done) => {
  runSequence('sasslint', 'watch', done)
})

gulp.task('sasslint', () => {
  return gulp.src(client.lint.styles.input)
    .pipe(sassLint())
    .pipe(sassLint.format())
})

gulp.task('watch', () => {
  gulp.watch(client.styles.watch, ['sasslint'])
})
