const express = require('express');
const router = express.Router();
const { renderIndex } = require('../controllers/viewController');

// View route to render index.ejs
router.get('/', renderIndex);

module.exports = router;
