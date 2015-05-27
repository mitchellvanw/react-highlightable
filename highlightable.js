'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Highlightable = _react2['default'].createClass({
    displayName: 'Highlightable',

    PropTypes: {
        highlightOnMount: _react2['default'].PropTypes.bool,
        background: _react2['default'].PropTypes.string,
        padding: _react2['default'].PropTypes.number,
        color: _react2['default'].PropTypes.string,
        borderRadius: _react2['default'].PropTypes.number,
        transition: _react2['default'].PropTypes.string,
        highlightDelay: _react2['default'].PropTypes.number
    },
    getDefaultProps: function getDefaultProps() {
        return {
            highlightOnMount: false,
            background: '#ae2240',
            padding: 2,
            color: '#f2f2f2',
            borderRadius: 2,
            transition: 'all .3s ease',
            highlightDelay: 300
        };
    },
    componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
        if (this.props.highlightOnMount == false && !this.props.children) return;
        var highlightedStyle = 'padding: ' + this.props.padding + 'px; transition: ' + this.props.transition + '; background: ' + this.props.background + '; color: ' + this.props.color + '; border-radius: ' + this.props.borderRadius + 'px';
        this.refs.highlightable.getDOMNode().setAttribute('style', highlightedStyle);
    },
    componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
        var _this = this;

        if (prevProps.highlightOnMount == false && !prevProps.children) return;
        var style = 'padding: ' + this.props.padding + 'px; transition: ' + this.props.transition;
        setTimeout(function () {
            return _this.refs.highlightable.getDOMNode().setAttribute('style', style);
        }, this.props.highlightDelay);
    },
    render: function render() {
        var mountStyle = {
            padding: this.props.padding,
            transition: this.props.transition
        };
        return _react2['default'].createElement(
            'span',
            { ref: 'highlightable', style: mountStyle },
            this.props.children
        );
    }
});

module.exports = Highlightable;