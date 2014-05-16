'use strict';
var assert = require('assert');
var displayNotification = require('./index');

it('should display a notification', function (cb) {
	displayNotification({
		title: 'title',
		subtitle: 'subtitle',
		text: 'text',
		sound: 'Bottle'
	}, function (err) {
		assert(!err, err);
		cb();
	});
});
