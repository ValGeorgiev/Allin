/** @jsx React.DOM */
var React = require('react');

var Time = React.createClass({

 	getInitialState: function() {
  	return {
    		isClicked: false
  	};
	},
  	
	componentWillMount() {

	},

	editTime: function (e) {
		this.setState({ isClicked: true });
		// this.textInput.focus();
	},

  	render: function () {
      console.log(this.state.isClicked);
  		var clickedClass = this.state.isClicked ? '' : 'hide';
    	return(
  			<div onClick={this.editTime()} className="col-xs-12 time-container">
	  			<span className="timing">{this.props.time["startTime-UK"]}</span>
	  			<input 
	  				className={clickedClass + " textTime"} 
	  				type="text"
	  				ref={(input) => {this.textInput = input; }}/>
			</div>
    	);
	}
});

module.exports = Time;