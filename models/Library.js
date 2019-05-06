const mongoose = require('mongoose');

const librarySchema = new mongoose.Schema({
	Title: {
		type: String,
	},
	Author: {
		type: String,
	},
	BibNum: {
		type: Number,
	},
	ISBN: {
		type: Number,
	},
	PublicationYear: {
		type: Number,
	},
	Publisher: {
		type: String,
	},
	Subjects: {
		type: String,
	},
	ItemType: {
		type: String,
	}, 
	ItemCollection: {
		type: String,
	}, 
	FloatingItem: {
		type: String,
	},
	ItemLocation: {
		type: String,
	},
	ReportDate: {
		type: Number,
	},
	ItemCount: {
		type: Number,
	}
}, {collection: 'testcollection'});

module.exports = mongoose.model('Library', librarySchema);