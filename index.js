import {runAppleScriptAsync} from 'run-applescript';
import escapeString from 'escape-string-applescript';

export default async function displayNotification({title = '', text = '', subtitle = '', sound} = {}) {
	if (process.platform !== 'darwin') {
		throw new Error('macOS only');
	}

	if (!title && !text) {
		throw new Error('`title` or `text` required');
	}

	let script = `display notification "${escapeString(text)}" with title "${escapeString(title)}" subtitle "${escapeString(subtitle)}"`;

	if (typeof sound === 'string') {
		script += ` sound name "${escapeString(sound)}"`;
	}

	await runAppleScriptAsync(script);
}
