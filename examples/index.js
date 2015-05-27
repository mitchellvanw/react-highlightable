'use strict';

var React = require('react');
var Highlightable = require('../src/highlightable');

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