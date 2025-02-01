const { PrismaClient } = require('@prisma/client');
const { validationResult } = require('express-validator');

const prisma = new PrismaClient();

exports.subscribe = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, name } = req.body;

    const existingSubscription = await prisma.subscription.findUnique({
      where: { email }
    });

    if (existingSubscription) {
      return res.status(409).json({ error: 'Email already subscribed' });
    }

    const newSubscription = await prisma.subscription.create({
      data: { email, name },
    });

    res.status(201).json({ 
      message: 'Subscription successful', 
      data: newSubscription 
    });
  } catch (error) {
    console.error('Error subscribing user:', error);
    if (error.code === 'P2002') {
      return res.status(409).json({ error: 'Email already exists' });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
};
