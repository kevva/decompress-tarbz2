'use strict';
const decompressTar = require('decompress-tar');
const isBzip = require('is-bzip2');
const seekBzip = require('seek-bzip');

module.exports = () => buf => {
	if (!Buffer.isBuffer(buf)) {
		return Promise.reject(new TypeError('Expected a buffer'));
	}

	if (!isBzip(buf)) {
		return Promise.resolve([]);
	}

	return decompressTar()(seekBzip.decode(buf));
};
