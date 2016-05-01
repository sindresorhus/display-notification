'use strict';
const escapeString = require('escape-string-applescript');
const runApplescript = require('run-applescript');

module.exports = opts => {
	if (process.platform !== 'darwin') {
		return Promise.reject(new Error('OS X only'));
	}

	if (!opts || !opts.title && !opts.text) {
		return Promise.reject(new Error('`title` or `text` required'));
	}

	let script = `display notification "${escapeString(opts.text || '')}" with title "${escapeString(opts.title || '')}" subtitle "${escapeString(opts.subtitle || '')}"`;

	if (typeof opts.sound === 'string') {
		script += ` sound name "${escapeString(opts.sound)}"`;
	}

	return runApplescript(script);
};
