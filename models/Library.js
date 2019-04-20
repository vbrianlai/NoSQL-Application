const mongoose = require('mongoose');

const librarySchema = new mongoose.Schema({
	Title: {
		type: String,
	},
	Author: {
		type: String,
	}
}, {collection: 'testcollection'});

module.exports = mongoose.model('Library', librarySchema);