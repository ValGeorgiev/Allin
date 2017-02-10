/** @jsx React.DOM */

var React = require('react');
var times = require('../data/times.js').times;
var Time = require('./ReactTime.js');
var TimeComponent = React.createFactory(Time);

var ReactScheduler = React.createClass({

  componentDidMount: function () {

  },

  render: function () {

    return(
      <div className="row" id="table-area">
        <div className="col-xs-12">
          <h2 className="scheduler-title">Your Scheduler</h2>
        </div>
        <div className="col-xs-12">
          {times.map(function(_time) {
            if (_time.id > 5 && _time.id < 16) {
              return <TimeComponent time={_time} />
            }
          })}
        </div>
      </div>
    );
  }
});

/* Module.exports instead of normal dom mounting */
module.exports = ReactScheduler;