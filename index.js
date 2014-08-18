'use strict';
var escapeString = require('escape-string-applescript');
var runApplescript = require('run-applescript');

module.exports = function (opts, cb) {
	if (!opts.title && !opts.text) {
		throw new Error('`title` or `text` required');
	}

	cb = cb || function () {};

	var script = 'display notification "' + escapeString(opts.text || '') + '" with title "' + escapeString(opts.title || '') + '" subtitle "' + escapeString(opts.subtitle || '') + '"';

	if (typeof opts.sound === 'string') {
		script += ' sound name "' + escapeString(opts.sound) + '"';
	}

	runApplescript(script, function (err) {
		cb(err);
	});
};
