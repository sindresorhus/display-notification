'use strict';
var test = require('ava');
var displayNotification = require('./');

test('display a notification', function (t) {
	t.plan(1);

	displayNotification({
		title: 'title',
		subtitle: 'subtitle',
		text: 'text',
		sound: 'Bottle'
	}, function (err) {
		t.assert(!err, err);
	});
});
