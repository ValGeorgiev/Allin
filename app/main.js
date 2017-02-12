/** @jsx React.DOM */

var React = require('react');
var ReactDOM = require('react-dom');
var ReactHeader = require('./components/ReactHeader');

var mountNode = document.getElementById('react-header');

ReactDOM.render(<ReactHeader />, mountNode);
