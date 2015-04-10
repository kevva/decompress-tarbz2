'use strict';

var path = require('path');
var isJpg = require('is-jpg');
var test = require('ava');
var vinylFile = require('vinyl-file');
var decompressTarbz2 = require('../');

test('decompress a TAR.BZ2 file', function (t) {
	t.plan(2);

	var file = vinylFile.readSync(path.join(__dirname, 'fixtures/test.tar.bz2'));
	var stream = decompressTarbz2();

	file.extract = true;

	stream.on('data', function (file) {
		t.assert(!file.stat.isDirectory());
		t.assert(isJpg(file.contents));
	});

	stream.end(file);
});

test('strip path level using the `strip` option', function (t) {
	t.plan(3);

	var file = vinylFile.readSync(path.join(__dirname, 'fixtures/test-nested.tar.bz2'));
	var stream = decompressTarbz2({strip: 1});

	file.extract = true;

	stream.on('data', function (file) {
		t.assert(!file.stat.isDirectory());
		t.assert(file.path === 'test.jpg', file.path);
		t.assert(isJpg(file.contents));
	});

	stream.end(file);
});
