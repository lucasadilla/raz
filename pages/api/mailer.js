// mailer.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service
    auth: {
        user: 'amirrazofficialwebsite@gmail.com', // Your email
        pass: 'xitu plth velh vyko'   // Your email password
    }
});

const sendMail = (to, subject, text) => {
    const mailOptions = {
        from: 'amirrazofficialwebsite@gmail.com',
        to,
        subject,
        text
    };

    return transporter.sendMail(mailOptions);
};

module.exports = sendMail;