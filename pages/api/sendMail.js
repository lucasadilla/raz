// pages/api/sendMail.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'jargon.website.mailer@gmail.com',
        pass: 'bwzo goju titq poky'
    }
});

const sendMail = (req, res) => {
    if (req.method === 'POST') {
        try {
            const { name, email, message, subject, about, urgency, reply } = req.body;

            const mailOptions = {
                from: 'amirrazofficialwebsite@gmail.com',
                to: 'profdramirraz@gmail.com',
                subject: subject || 'No Subject',
                text: `
                    Name: ${name}
                    Email: ${email}
                    About: ${about}
                    Urgency: ${urgency}
                    Reply Needed: ${reply}
                    Message: ${message}
                `
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return res.status(500).json({ message: 'Error sending email', error });
                }
                res.status(200).json({ message: 'Email sent successfully', info });
            });
        } catch (error) {
            res.status(400).json({ message: 'Invalid JSON', error });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
};

export default sendMail;