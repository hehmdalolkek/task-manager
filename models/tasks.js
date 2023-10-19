const mongoose = require('mongoose');


const taskShema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, 'must provide title'],
		maxlenght: [30, 'title can not be more than 20 characters'],
		trim: true
	},
	isDone: {
		type: Boolean,
		default: false
	}
});


module.exports = mongoose.model('Task', taskShema);