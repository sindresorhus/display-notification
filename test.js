import test from 'ava';
import m from './';

test('error', t => {
	t.throws(m(), '`title` or `text` required');
	t.throws(m({subtitle: 'foo'}), '`title` or `text` required');
});

test('display notification', t => {
	t.notThrows(m({
		title: 'title',
		subtitle: 'subtitle',
		text: 'text',
		sound: 'Bottle'
	}));
});
