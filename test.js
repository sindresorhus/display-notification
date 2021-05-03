import test from 'ava';
import displayNotification from './index.js';

test('error', async t => {
	await t.throwsAsync(
		displayNotification(),
		{message: '`title` or `text` required'}
	);

	await t.throwsAsync(
		displayNotification({subtitle: 'foo'}),
		{message: '`title` or `text` required'}
	);
});

test('display notification', async t => {
	await t.notThrowsAsync(
		displayNotification({
			title: 'title',
			subtitle: 'subtitle',
			text: 'text',
			sound: 'Bottle'
		})
	);
});
