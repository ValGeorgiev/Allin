import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';



function router() {
	var page = window.location.href.slice(window.location.href.lastIndexOf('/') + 1);

	console.log(page);

	switch (page) {
		case ''		: page = "Scheduler"; break;
		case 'day'	: page = "Day"; break;
		case 'week' : page = "Week"; break;
		case 'year' : page = "Year"; break;
		default 	: page = "Error";
	}

	return page;
}

ReactDOM.render(
  <App page={router()}/>,
  document.getElementById('root')
);
