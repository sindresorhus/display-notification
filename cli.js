#!/usr/bin/env node
'use strict';
var stdin = require('get-stdin');
var argv = require('minimist')(process.argv.slice(2));
var pkg = require('./package.json');
var displayNotification = require('./index');
var input = argv._[0];

function help() {
	console.log([
		pkg.description,
		'',
		'Usage',
		'  $ display-notification <text> [--title <>] [--subtitle <>] [--sound <>]',
		'  $ echo <text> | display-notification [--title <>] [--subtitle <>] [--sound <>]',
		'',
		'Example',
		'  $ display-notification \'I love unicorns\' --title \'Unicorns\''
	].join('\n'));
}

function init(text) {
	displayNotification({
		title: argv.title,
		subtitle: argv.subtitle,
		text: text,
		sound: argv.sound
	});
}

if (argv.version) {
	console.log(pkg.version);
	return;
}

if (argv.help) {
	help();
	return;
}

if (process.stdin.isTTY) {
	if (!input && !argv.title) {
		help();
		return;
	}

	init(input);
} else {
	stdin(init);
}
