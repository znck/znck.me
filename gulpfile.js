var gulp = require('gulp');
var elixir = require('laravel-elixir');
var argv = require('yargs').argv;

elixir.config.publicPath = 'content/assets';

elixir(function (mix) {
  var env = argv.e || argv.env || 'default';

  mix.sass(['app.scss'])
      .browserify('app.js')
      .exec('sereno build --env=' + env, [
        './blog/*',
        './docs/*',
        './content/*',
        './blog/**/*',
        './docs/**/*',
        './content/**/*',
        './resources/*',
        './resources/**/*',
        './projects/*',
        './projects/**/*',
        './sereno*.yml'
      ])
      .browserSync({
        server: {
          baseDir: 'public'
        },
        proxy: null,
        files: ['public/**/*']
      });
});
