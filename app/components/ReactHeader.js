/** @jsx React.DOM */

var React = require('react');

var ReactHeader = React.createClass({
  render: function () {

    return(
      <div className="row">
        <div className="col-xs-12">
          <h1 id="main-title">All In</h1>
        </div>    
        <div className="col-xs-3">
          <a className="nav-tab" href="/">Scheduler</a>
        </div>    
        <div className="col-xs-3">
          <a className="nav-tab middle" href="/day">Day</a>
        </div>    
        <div className="col-xs-3">
          <a className="nav-tab right" href="/week">Week</a>
        </div>    
        <div className="col-xs-3">
          <a className="nav-tab" href="/year">Year</a>
        </div>    
      </div>
    );
  }
  
});

/* Module.exports instead of normal dom mounting */
module.exports = ReactHeader;