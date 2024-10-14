// mailer.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service
    auth: {
        user: 'lucasadilla1@gmail.com', // Your email
        pass: 'dxly nuhs kqle hyaa'   // Your email password
    }
});

const sendMail = (to, subject, text) => {
    const mailOptions = {
        from: 'jargon.website.mailer@gmail.com',
        to,
        subject,
        text
    };

    return transporter.sendMail(mailOptions);
};

module.exports = sendMail;