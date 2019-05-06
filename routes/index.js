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
	Library.find({ReportDate: 20180201})
		.then((books) => {
			books.forEach((book) => console.log(book));
			res.render('index', {title: 'Listing Books', books});
		})
		.catch(() => {res.send('Sorry, something went wrong!');});
});

//USE CASE 1
router.get('/query1', (req, res) => {
	Library.find({ReportDate: 20180201})
		.then((books) => {
			if (books.length > 0) {
				books.forEach((book) => console.log(book));
				res.render('index', {title: 'Listing Books', books});
			} else {
				res.send("No books found");
			}
		})
		.catch(() => {res.send('Sorry, something went wrong!');});
});

//USE CASE 2
router.get('/query2', (req, res) => {
	Library.find({Author: "Real Estate Research Corporation", ReportDate: 20180201})
		.limit(1)
		.then((books) => {
			books.forEach((book) => console.log(book));
			res.render('index', {title: 'Listing Books', books});
		})
		.catch(() => {res.send('Sorry, something went wrong!');});
});

//USE CASE 3
router.get('/query3', (req, res) => {
	Library.find({Title: "The world of gold today"})
		.then((books) => {
			books.forEach((book) => console.log(book));
			res.render('index', {title: 'Listing Books', books});
		})
		.catch(() => {res.send('Sorry, something went wrong!');});
});

//USE CASE 4
router.get('/query4', (req, res) => {
	Library.find({BibNum: 52290})
		.then((books) => {
			books.forEach((book) => console.log(book));
			res.render('index', {title: 'Listing Books', books});
		})
		.catch(() => {res.send('Sorry, something went wrong!');});
});

//USE CASE 5
router.get('/query5', (req, res) => {
	Library.find({ReportDate: {$in: [20180101, 20180201]}})
		.then((books) => {
			books.forEach((book) => console.log(book));
			res.render('index', {title: 'Listing Books', books});
		})
		.catch(() => {res.send('Sorry, something went wrong!');});
});

//USE CASE 6
router.get('/query6', (req, res) => {
	Library.find({ReportDate: 20180501}).sort({PublicationYear: -1})
		.then((books) => {
			books.forEach((book) => console.log(book));
			res.render('index', {title: 'Listing Books', books});
		})
		.catch(() => {res.send('Sorry, something went wrong!');});
});

//USE CASE 7
router.get('/query7', (req, res) => {
	Library.find({ItemCount: {$gt: 3}, ReportDate: 20180901})
		.then((books) => {
			books.forEach((book) => console.log(book));
			res.render('index', {title: 'Listing Books', books});
		})
		.catch(() => {res.send('Sorry, something went wrong!');});
});

//USE CASE 8 
router.get('/query8', (req, res) => {
	Library.find({Publisher: "Scarecrow Press"})
		.then((books) => {
			books.forEach((book) => console.log(book));
			res.render('index', {title: 'Listing Books', books});
		})
		.catch(() => {res.send('Sorry, something went wrong!');});
});

//USE CASE 9
router.get('/query9', (req, res) => {
	Library.find({ReportDate: 20180101}).sort({BibNum: 1})
		.then((books) => {
			books.forEach((book) => console.log(book));
			res.render('index', {title: 'Listing Books', books});
		})
		.catch(() => {res.send('Sorry, something went wrong!');});
});

//USE CASE 10
router.get('/query10', (req, res) => {
	Library.find({Title: {$regex: ".*history.*"}})
		.then((books) => {
			books.forEach((book) => console.log(book));
			res.render('index', {title: 'Listing Books', books});
		})
		.catch(() => {res.send('Sorry, something went wrong!');});
});

//USE CASE 11
router.get('/query11', (req, res) => {
	Library.find({PublicationYear: 1960})
		.then((books) => {
			books.forEach((book) => console.log(book));
			res.render('index', {title: 'Listing Books', books});
		})
		.catch(() => {res.send('Sorry, something went wrong!');});
});

//USE CASE 12
router.get('/query12', (req, res) => {
	Library.find({ItemCollection: "cs8r"})
		.then((books) => {
			books.forEach((book) => console.log(book));
			res.render('index', {title: 'Listing Books', books});
		})
		.catch(() => {res.send('Sorry, something went wrong!');});
});

//USE CASE 13
router.get('/update13', (req, res) => {
	const newBook = new Library({
	BibNum: 12345,
	Title: "NoSQL Examples",
	Author: "Team RAB",
	ISBN: 0123456789,
	PublicationYear: 2019,
	Publisher: "SJSU",
	Subjects: "Technology",
	ItemType: "arbk",
	ItemCollection: "canf",
	FloatingItem: "NA",
	ItemLocation: "cen",
	ReportDate: 20190503,
	ItemCount: 1
});
	newBook.save(err => {
		if (err) {return handleError(err)}
			else {
				res.send("Book Inserted");
				console.log(newBook);
			}

	});
});

//USE CASE 14
router.get('/delete14', (req, res) => {
	Library.deleteMany({BibNum: 36372}, (err) => {
		if (err) {return handleError(err)}
			else {
				res.send("Books Deleted")
			}
	})
});

//USE CASE 15
router.get('/update15', (req, res) => {
	Library.update({ BibNum: 38687 }, {$set: {Publisher: "Penguin Books"}}, {"multi": true}, (err) => {
		if (err) {return handleError(err)}
			else {
				res.send("Book Updated")
			}
	})
})

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