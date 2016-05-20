# decompress-tarbz2 [![Build Status](https://travis-ci.org/kevva/decompress-tarbz2.svg?branch=master)](https://travis-ci.org/kevva/decompress-tarbz2)

> tar.bz2 decompress plugin


## Install

```
$ npm install --save decompress-tarbz2
```


## Usage

```js
const decompress = require('decompress');
const decompressTarbz = require('decompress-tarbz2');

decompress('unicorn.tar.gz', 'dist', {
	plugins: [
		decompressTarbz()
	]
}).then(() => {
	console.log('Files decompressed');
});
```


## API

### decompressTarbz()(buf)

#### buf

Type: `Buffer`

Buffer to decompress.


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
