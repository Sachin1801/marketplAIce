const express = require('express');
const { sendNewsletterToAll } = require('../controllers/newsletterController');

const router = express.Router();

router.post('/send', sendNewsletterToAll);

module.exports = router;
