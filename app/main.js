/** @jsx React.DOM */

var React = require('react');
var ReactDOM = require('react-dom');
var ReactScheduler = require('./components/ReactScheduler');

var mountNode = document.getElementById('react-main-mount');

ReactDOM.render(<ReactScheduler />, mountNode);
