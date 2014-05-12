var entropy = require('../index'),
    assert = require('assert'),
    fs = require('fs'),
    _ = require('lodash');


suite('string-entropy', function() {
    test('alpha numeric strings between 8 and 9 have an entropy less then 50', function() {
        _.times(99999, function() {
            var str = Math.round(Math.random() * 10e13).toString(36);
            assert.ok(entropy(str) < 50, '9 random alphanum chars are a weak password');
        });
    });

    test('phrases make better passwords', function() {
        _.times(99999, function() {
            var str = [Math.round(Math.random() * 10e13).toString(36), Math.round(Math.random() * 10e13).toString(36), Math.round(Math.random() * 10e13).toString(36)].join(' ');
            assert.ok(entropy(str) > 100, 'three "words" yield high entropy');
        });
    });

    test('the 10k most common passwords are weak', function(done) {
        fs.readFile('test/10k_most_common.txt', function(err, data) {
            var lines = data.toString().split(/\n/);

            lines.forEach(function(str) {
                assert.ok(entropy(str) < 70, "Yup, that's a weak password");
            });

            done();
        });
    });

    test('a supposedly strong passwords', function() {
        assert.ok(entropy('correct horse battery staple') > 120, 'xkcd is right');
    });
});
