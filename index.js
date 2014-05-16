'use strict';
var execFile = require('child_process').execFile;
var escapeString = require('escape-string-applescript');

module.exports = function (opts, cb) {
	if (!opts.title && !opts.text) {
		throw new Error('`title` or `text` required');
	}

	cb = cb || function () {};

	var script = 'display notification "' + escapeString(opts.text || '') + '" with title "' + escapeString(opts.title || '') + '" subtitle "' + escapeString(opts.subtitle || '') + '"';

	if (typeof opts.sound === 'string') {
		script += ' sound name "' + escapeString(opts.sound) + '"';
	}

	execFile('osascript', ['-e', script], function (err) { cb(err); });
};
