import 'dotenv/config';
import { db } from '../db.js';
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS for all origins, adjust in production
// --- Nodemailer Transporter ---
// We create the transporter outside the request handler to avoid recreating it on every request
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});
app.post('/api/contact', async (req, res) => {
    const { name, email, message, phone } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }
    try {
        // 1. Insert into Turso database
        await db.execute({
            sql: 'INSERT INTO contacts (name, email, message, phone) VALUES (?, ?, ?, ?)',
            args: [name, email, message, phone || null],
        });
        // 2. Send email using Nodemailer
        const mailOptions = {
            from: `"ConfiaPE Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER, // Send to your own email
            subject: `Nuevo Mensaje de Contacto de: ${name}`,
            html: `
        <h1>Nuevo Mensaje del Formulario de Contacto</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
        <hr>
        <h2>Mensaje:</h2>
        <p>${message}</p>
      `,
        };
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Contact form submitted successfully!' });
    }
    catch (error) {
        console.error('Error submitting contact form:', error);
        res.status(500).json({ error: 'Failed to submit contact form.' });
    }
});
// This is for local development/testing. In a serverless environment,
// the platform handles the listening.
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
export default app;
