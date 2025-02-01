const express = require('express');
const subscriptionRoutes = require('./subscriptions');

const router = express.Router();
router.use('/subscriptions', subscriptionRoutes);

module.exports = router;
