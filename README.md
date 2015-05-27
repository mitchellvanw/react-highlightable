React-highlightable
============
[![Dependency Status](https://david-dm.org/mitchellvanw/react-highlightable.svg)](https://david-dm.org/mitchellvanw/react-highlightable)
[![peerDependency Status](https://david-dm.org/mitchellvanw/react-highlightable/peer-status.svg)](https://david-dm.org/mitchellvanw/react-highlightable#info=peerDependencies)
[![devDependency Status](https://david-dm.org/mitchellvanw/react-highlightable/dev-status.svg)](https://david-dm.org/mitchellvanw/react-highlightable#info=devDependencies)
[![Build Status](https://travis-ci.org/mitchellvanw/react-highlightable.svg?branch=master)](https://travis-ci.org/mitchellvanw/react-highlightable)

> Highlight values in your app when they're changed to emphasize them.

## Demo

Try [this demo](http://google.com) or `git clone http://github.com/mitchellvanw/react-highlightable` and open `/examples/index.html`

## Installation

```shell
npm install react-highlightable --save
```

## Usage
```javascript
var React = require('react');
var Highlightable = require('react-highlightable');

var App = React.createClass({
  render: function() {
      return (
          <div>
              <h1>Your App</h1>
              <Timer />
          </div>
      );
  }
});

var Timer = React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 0};
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return <div>Seconds Elapsed: <Highlightable>{this.state.secondsElapsed}</Highlightable></div>;
  }
});

React.render(<App />, document.getElementById('mount-node'));
```
## Documentation - props

#### children : string or number (required)
It expects text not an element (`<Highlightable>...</Highlightable>`) that will be highlighted.

#### highlightOnMount : bool (optional)
If true, on mount it'll highlight the value on mount.

default: `false`

#### background : string (optional)
This will determine the background of the highlight.

default: `#ae2240`

#### padding: number (optional)
The padding used for the highlighted item.

default: `2`

#### color: string (optional)
The font color used when the item is highlighted.

default: `#f2f2f2`

#### borderRadius: number (optional)
The border radius used when the item is highlighted.

default: 2

#### transition: string (optional)
The transition used when the item is highlighted.

default: `all .3s ease`

#### highlightDelay: number (optional)
The delay in milliseconds when the highlighted item returns to a normal state.

## Contribution

Please, create issues and pull requests.

```shell
git clone https://github.com/mitchellvanw/react-highlightable
cd react-portal
npm install
npm install react
gulp
```
- Copy&paste the address from terminal to your browser. (something like `http://localhost:8080`)
- Don't commit the main build `portal.js` (aka don't run `npm run build`)
- Run `gulp eslint` before every commit to preserve the coding style. Do you know there is a [nice real-time checking integration for your editor](http://eslint.org/docs/user-guide/integrations)? ;-)


## Maintainers

This package is maintained by [Mitchell van Wijngaarden](http://kooding.nl).

## License

This package is licensed under the [MIT license](https://github.com/mitchellvanw/react-highlightable/blob/master/LICENSE).