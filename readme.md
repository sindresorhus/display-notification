# display-notification [![Build Status](https://travis-ci.org/sindresorhus/display-notification.svg?branch=master)](https://travis-ci.org/sindresorhus/display-notification)

> Display a notification *(OS X 10.9+)*

![](screenshot.png)


## Install

```sh
$ npm install --save display-notification
```


## Usage

```js
var displayNotification = require('display-notification');

displayNotification({
	title: 'Unicorns',
	subtitle: 'Rainbows',
	text: 'Cake',
	sound: 'Bottle'
});
```


## API

### displayNotification(options, callback)

Everything is a string and optional, except you need to supply at least a `title` or `text`.

The icon cannot be changed.

#### options

##### title

##### subtitle

##### text

##### sound

The name of a sound located in `~/Library/Sounds` or `/System/Library/Sounds`:

`Basso` `Blow` `Bottle` `Frog` `Funk` `Glass` `Hero` `Morse` `Ping` `Pop` `Purr` `Sosumi` `Submarine` `Tink`


## CLI

```sh
$ npm install --global display-notification
```

```sh
$ display-notification --help

  Usage
    display-notification <text> [--title <>] [--subtitle <>] [--sound <>]
    echo <text> | display-notification [--title <>] [--subtitle <>] [--sound <>]

  Example
    display-notification 'I love unicorns' --title 'Unicorns'
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
