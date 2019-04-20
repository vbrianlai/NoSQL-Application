const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const Library = mongoose.model('Library');


router.get('/', (req, res) => {
	res.render('testForm', {title: 'Search For Book'});
});

router.post('/', (req, res) => {
	console.log(req.body);
	res.render('testForm', {title: 'Search For Book'});
});


router.get('/books', (req, res) => {
	Library.find({ReportDate: "01/01/2018"})
		.limit(10)
		.then((books) => {
			books.forEach((book) => console.log(book));
			res.render('index', {title: 'Listing Books', books});
		})
		.catch(() => {res.send('Sorry, something went wrong!');});
});

// router.get('/insertBook', (req, res) => {
// 	const testBook = new Library({Title: "Harry Potter", Author: "J.K. Rowling"});
// 	testBook.save(err => {
// 		if (err) {return handleError(err)}
// 			else {
// 				res.send("Book Inserted");
// 			}

// 	});
// });

// router.get('/deleteBook', (req, res) => {
// 	Library.deleteMany({Title: "Harry Potter"}, (err) => {
// 		if (err) {return handleError(err)}
// 			else {
// 				res.send("Books Deleted")
// 			}
// 	})
// });

// router.get('/updateBook', (req, res) => {
// 	Library.updateOne({ Title: "Harry Potter" }, {Title: "Harry Potter and the Chamber of Secrets"}, (err) => {
// 		if (err) {return handleError(err)}
// 			else {
// 				res.send("Book Updated")
// 			}
// 	})
// })


module.exports = router;