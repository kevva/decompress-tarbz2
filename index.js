'use strict';
const decompressTar = require('decompress-tar');
const fileType = require('file-type');
const seekBzip = require('seek-bzip');

module.exports = () => buf => {
	if (!Buffer.isBuffer(buf)) {
		return Promise.reject(new TypeError(`Expected a Buffer, got ${typeof buf}`));
	}

	if (!fileType(buf) || fileType(buf).ext !== 'bz2') {
		return Promise.resolve([]);
	}

	return decompressTar()(seekBzip.decode(buf));
};
