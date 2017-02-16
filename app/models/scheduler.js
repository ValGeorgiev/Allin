var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Scheduler = new Schema({
	times : {
		type: Array
	},
	username: {
		type: String
	}
},{
	collection: 'Scheduler'
});

module.exports = mongoose.model('Scheduler', Scheduler);