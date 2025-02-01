const { PrismaClient } = require('@prisma/client');
const { sendNewsletter } = require('../emailService');
const prisma = new PrismaClient();

exports.sendNewsletterToAll = async (req, res) => {
    const { subject, content } = req.body;

    try {
        // Fetch all subscriber emails
        const subscribers = await prisma.subscription.findMany({ select: { email: true } });

        if (subscribers.length === 0) {
            return res.status(400).json({ message: 'No subscribers found' });
        }

        // Send newsletter to each subscriber
        for (const subscriber of subscribers) {
            await sendNewsletter(subscriber.email, subject, content);
        }

        res.status(200).json({ message: 'Newsletter sent successfully!' });
    } catch (error) {
        console.error('Error sending newsletter:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
