const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const Library = mongoose.model('Library');


router.get('/query1', (req, res) => {
	Library.find({ReportDate: 20180201})
		.then((books) => {
			books.forEach((book) => console.log(book));
			res.render('index', {title: 'Listing Books', books});
		})
		.catch(() => {res.send('Sorry, something went wrong!');});
});

modules.exports = router;