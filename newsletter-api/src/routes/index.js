const express = require('express');
const subscriptionRoutes = require('./subscriptions');
const newsletterRoutes = require('./newsletter');
const router = express.Router();
router.use('/subscriptions', subscriptionRoutes);
router.use('/newsletter', newsletterRoutes);
module.exports = router;
