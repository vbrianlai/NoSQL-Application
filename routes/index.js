const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
	res.send("Test: Working!");
});


module.exports = router;