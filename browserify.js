var fs = require( 'fs');
var browserify = require('browserify');
var babelify = require("babelify");
var jsxify = require('jsx-transform').browserifyTransform;

browserify('./public/js/index.js', { debug: true})
.transform( jsxify, { factory: "EX.node", arrayChildren: true })
.transform(babelify, {presets: ["es2015"]})
.bundle()
  .on('error', function (err) {
    console.log(`Error : ${ err.message }`);
  })
  .pipe(fs.createWriteStream('./public/dist/bundle.js'));