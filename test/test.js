/*global describe, it */
'use strict';

var assert = require('assert');
var Decompress = require('decompress');
var fs = require('fs');
var path = require('path');
var tarbz2 = require('../');

describe('tar()', function () {
    it('should decompress a TAR.BZ2 file', function (cb) {
        var decompress = new Decompress();

        decompress
            .src(path.join(__dirname, 'fixtures/test.tar.bz2'))
            .dest(path.join(__dirname, 'tmp'))
            .use(tarbz2())
            .decompress(function (err) {
                assert(!err);
                assert(fs.existsSync(path.join(__dirname, 'tmp/test.jpg')));
                cb();
            });
    });
});
