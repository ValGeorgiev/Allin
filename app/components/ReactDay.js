/** @jsx React.DOM */
var React = require('react');

var Day = React.createClass({

 	getInitialState: function() {
  	return {
    		isClicked: false
  	};
	},

	render: function () {
		return(
      <div>
        Test
      </div>
    );
  }
});

module.exports = Day;