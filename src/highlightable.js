'use strict';

import React from 'react';

var Highlightable = React.createClass({
    PropTypes: {
        highlightOnMount: React.PropTypes.bool,
        background: React.PropTypes.string,
        padding: React.PropTypes.number,
        color: React.PropTypes.string,
        borderRadius: React.PropTypes.number,
        transition: React.PropTypes.string,
        highlightDelay: React.PropTypes.number
    },
    getDefaultProps() {
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
    componentWillUpdate(nextProps, nextState) {
        if (this.props.highlightOnMount == false && ! nextProps.children)
            return;
        var highlightedStyle = "padding: "+this.props.padding+"px; transition: "+this.props.transition+"; background: "+this.props.background+"; color: "+this.props.color+"; border-radius: "+this.props.borderRadius+"px";
        this.refs.highlightable.getDOMNode().setAttribute('style', highlightedStyle);
    },
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.highlightOnMount == false && ! this.props.children)
            return;
        var style = "padding: "+this.props.padding+"px; transition: "+this.props.transition;
        setTimeout(() => this.refs.highlightable.getDOMNode().setAttribute('style', style), this.props.highlightDelay);
    },
    render() {
        var mountStyle = {
            padding: this.props.padding,
            transition: this.props.transition
        };
        return <span ref="highlightable" style={mountStyle}>{this.props.children}</span>;
    }
});

module.exports = Highlightable;