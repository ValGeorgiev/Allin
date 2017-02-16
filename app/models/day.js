var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Day = new Schema({
	thoughts : {
		type: Array
	},
	achivements : {
		type: Array
	},
	thanks : {
		type: Array
	},
	username : {
		type: String
	}
},{
	collection: 'Day'
});

module.exports = mongoose.model('Day', Day);