var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server')

var ReactDay = React.createFactory(require('../components/ReactDay'));

module.exports = function(app) {

	app.get('/day', function(req, res){
		// React.renderToString takes your component
    	// and generates the markup
		var day = ReactDOMServer.renderToString(<ReactDay />);
    	// Output html rendered by react
    	res.render('index.ejs', {reactOutput: day});
	});

};
