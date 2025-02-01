const express = require('express');
const { body } = require('express-validator');
const { getSubscribers, subscribe } = require('../controllers/subscriptionController');

const router = express.Router();
router.get('/', getSubscribers);

router.post(
  '/subscribe',
  [
    body('email').isEmail().withMessage('Invalid email format'),
    body('name').notEmpty().withMessage('Name is required'),
  ],
  subscribe
);

module.exports = router;
