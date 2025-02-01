const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // Use `true` for 465, `false` for 587
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

const sendNewsletter = async (recipientEmail, subject, content) => {
    try {
        await transporter.sendMail({
            from: `"Your Newsletter" <${process.env.SMTP_USER}>`,
            to: recipientEmail,
            subject: subject,
            html: content, // HTML email body
        });

        console.log(`Newsletter sent to ${recipientEmail}`);
    } catch (error) {
        console.error(`Error sending email: ${error.message}`);
    }
};

module.exports = { sendNewsletter };
