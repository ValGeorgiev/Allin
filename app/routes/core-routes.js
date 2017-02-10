var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server')

var ReactScheduler = React.createFactory(require('../components/ReactScheduler'));

module.exports = function(app) {

	app.get('/', function(req, res){
		// React.renderToString takes your component
    	// and generates the markup
		var scheduler = ReactDOMServer.renderToString(<ReactScheduler/>);
    	// Output html rendered by react
    	res.render('index.ejs', {reactOutput: scheduler});
	});

};
