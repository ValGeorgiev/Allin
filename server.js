// server.js

var express = require('express'),
	path = require('path'),
	app = express(),
	morgan = require('morgan'),
	mongoose = require('mongoose'),
	config = require('./config.js'),
	bodyParser = require('body-parser'),
	jsx = require('node-jsx');

// Make sure to include the JSX transpiler
jsx.install();

// Include static assets. Not advised for production
app.use(express.static(path.join(__dirname, 'public')));
// Set view path
app.set('views', path.join(__dirname, 'views'));
// set up ejs for templating. You can use whatever
app.set('view engine', 'ejs');

app.use(morgan('dev'));

// Set up Routes for the application
require('./app/routes/SchedulerRouter.js')(app);
require('./app/routes/DayRouter.js')(app);

//Route not found -- Set 404
app.get('*', function(req, res) {
    res.json({
        'route': 'Sorry this page does not exist!'
    });
});

app.listen(config.port, function(err) {
	if ( err ) {
		console.error(error);
	} else {
		console.log('Server is running on ' + config.port);
	}
});
