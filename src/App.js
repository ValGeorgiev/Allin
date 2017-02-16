import React, { Component } from 'react';
import Scheduler from './Components/Scheduler';
import Day from './Components/Day';
import Week from './Components/Week';
import Year from './Components/Year';
import Error from './Components/Error';
import Times from './Data/times';
import settingsImage from '../public/img/settings.png';

import './App.css';

class App extends Component {

	constructor() {
		super();
		this.state = {
			times: [],
			openSettings: false
		};
	}

	componentWillMount() {
		this.setState({
			times: Times
		});
	}

	clickSettings() {
		this.setState({
  			openSettings: true
  		});
	}

	handleRouter() {
		switch (this.props.page) {
			case 'Scheduler': return <Scheduler times={this.state.times}/>;
			case 'Day': return <Day />;
			case 'Week': return <Week />;
			case 'Year': return <Year />;
			case 'Error': return <Error />;
		}
	}

	closeSettingsModal() {
		this.setState({
  			openSettings: false
  		});
	}

	saveSettings() {
		this.setState({
  			openSettings: false
  		});
	}
 
	render() {
		let settingsClass = this.state.openSettings ? '' : 'hide';
		
		let times;

	  	if ( Times ) {
	  		times = Times.map(time => {
	  			return (
	  				<option  value={time["startTime-UK"]}>{time["startTime-UK"]}</option>
	   			)
	  		})
	  	}

		return (
			<div className="wrapper">
				<div className="row nav">
			        <div className="col-xs-12">
			          <h1 id="main-title">All In</h1>
			          <img onClick={this.clickSettings.bind(this)} src={settingsImage} className="settings-icon"/>
			          <div onClick={this.closeSettingsModal.bind(this)} className={settingsClass + ' modal-background'}> </div>
			          <div className={settingsClass + ' settings-modal'}>
		          		<h2>Settings</h2>
		          		<div className="start-time">
		          			<span className="start-label">Scheduler start time: </span>
		          			<select> 
		          				{times}
		          			</select>
		          		</div>
		          		<div className="end-time">
		          			<span className="end-label">Scheduler end time: </span>
		          			<select> 
		          				{times}
		          			</select>
		          		</div>
		          		<button className="save-btn" onClick={this.saveSettings.bind(this)}>Save</button>
			          </div>
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
				{this.handleRouter()}		
  			</div>
		);
 	}
}


export default App;
