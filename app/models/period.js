var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Period = new Schema({
	goals : {
		type: Array
	},
	weekgoals : {
		type: Array
	},
	username : {
		type: String
	}
},{
	collection: 'Period'
});

module.exports = mongoose.model('Period', Period);