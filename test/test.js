'use strict';

var Decompress = require('decompress');
var exists = require('fs').exists;
var path = require('path');
var rm = require('rimraf');
var tarBz2 = require('../');
var test = require('ava');

test('decompress a TAR.BZ2 file', function (t) {
    t.plan(3);

    var decompress = new Decompress()
        .src(path.join(__dirname, 'fixtures/test.tar.bz2'))
        .dest(path.join(__dirname, 'tmp'))
        .use(tarBz2());

    decompress.decompress(function (err) {
        t.assert(!err);

        exists(path.join(decompress.dest(), 'test.jpg'), function (exist) {
            t.assert(exist);

            rm(decompress.dest(), function (err) {
                t.assert(!err);
            });
        });
    });
});

test('strip path level using the `strip` option', function (t) {
    t.plan(3);

    var decompress = new Decompress()
        .src(path.join(__dirname, 'fixtures/test-nested.tar.bz2'))
        .dest(path.join(__dirname, 'tmp'))
        .use(tarBz2({ strip: 1 }));

    decompress.decompress(function (err) {
        t.assert(!err);

        exists(path.join(decompress.dest(), 'test.jpg'), function (exist) {
            t.assert(exist);

            rm(decompress.dest(), function (err) {
                t.assert(!err);
            });
        });
    });
});
