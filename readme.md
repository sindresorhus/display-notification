# display-notification

> Display a notification *(macOS 10.9+)*

![](screenshot.png)

## Install

```
$ npm install display-notification
```

## Usage

```js
import displayNotification from 'display-notification';

await displayNotification({
	title: 'Unicorns',
	subtitle: 'Rainbows',
	text: 'Cake',
	sound: 'Bottle'
});
```

## API

### displayNotification(options)

Returns a promise that resolves when the notification is shown.

#### options

Specify at least a `title` or `text`.

##### title

Type: `string`

Title of the notification.

##### subtitle

Type: `string`

Subtitle of the notification.

##### text

Type: `string`

Content of the notification.

##### sound

Type: `string`\
Values: `Basso` `Blow` `Bottle` `Frog` `Funk` `Glass` `Hero` `Morse` `Ping` `Pop` `Purr` `Sosumi` `Submarine` `Tink`

Name of the sound located in `~/Library/Sounds` or `/System/Library/Sounds`:
