// pages/api/save-email.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        }

        const filePath = path.join(process.cwd(), 'emails.json');
        let emails = [];

        if (fs.existsSync(filePath)) {
            const fileData = fs.readFileSync(filePath);
            emails = JSON.parse(fileData);
        }

        emails.push({ email, date: new Date().toISOString() });

        fs.writeFileSync(filePath, JSON.stringify(emails, null, 2));

        return res.status(200).json({ message: 'Email saved successfully' });
    } else {
        return res.status(405).json({ error: 'Method not allowed' });
    }
}