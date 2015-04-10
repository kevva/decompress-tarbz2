# decompress-tarbz2 [![Build Status](http://img.shields.io/travis/kevva/decompress-tarbz2.svg?style=flat)](https://travis-ci.org/kevva/decompress-tarbz2)

> tar.bz2 decompress plugin


## Install

```
$ npm install --save decompress-tarbz2
```


## Usage

```js
var Decompress = require('decompress');
var decompressTarbz2 = require('decompress-tarbz2');

new Decompress()
	.src('foo.tar.bz2')
	.dest('dest')
	.use(decompressTarbz2({strip: 1}))
	.run();
```

You can also use this plugin with [gulp](http://gulpjs.com):

```js
var decompressTarbz2 = require('decompress-tarbz2');
var gulp = require('gulp');
var vinylAssign = require('vinyl-assign');

gulp.task('default', function () {
	return gulp.src('foo.tar.bz2')
		.pipe(vinylAssign({extract: true}))
		.pipe(decompressTarbz2({strip: 1}))
		.pipe(gulp.dest('dest'));
});
```


## API

### decompressTarbz2(options)

#### options.strip

Type: `number`  
Default: `0`

Remove leading directory components from extracted files.


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
