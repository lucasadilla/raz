// pages/Contact.js
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { NextSeo } from 'next-seo';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        subject: '',
        about: '',
        urgency: '',
        reply: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/sendMail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error('API endpoint not found');
                }
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            alert(result.message);
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Error sending email: ' + error.message);
        }
    };

    return (
        <div>
            <NextSeo
                title="Contact Amir Raz"
                description="Get in touch with Amir Raz for inquiries, comments, or questions. Fill out the contact form and Amir will respond as soon as possible."
                openGraph={{
                    url: 'https://www.amirraz.com/Contact',
                    title: 'Contact Amir Raz',
                    description: 'Get in touch with Amir Raz for inquiries, comments, or questions. Fill out the contact form and Amir will respond as soon as possible.',
                    images: [
                        {
                            url: 'https://www.amirraz.com/images/contact/cover.png',
                            width: 800,
                            height: 600,
                            alt: 'Contact Amir Raz',
                        },
                    ],
                    site_name: 'Amir Raz',
                }}
            />
            <Navbar />
            <main className="main-content contact-page">
                <div className="col-md-8 page-content-wrap col-md-offset-2">
                    <p><span>Dear Friend,</span></p>
                    <p><span>Thank you for your interest in my research.</span></p>
                    <p><span>Please fill out the form below and I will do my best to read and act accordingly.</span></p>
                    <p><span>Suggestibly yours,</span></p>
                    <p><span>-Amir</span></p>
                    <div className="wpforms-container wpforms-container-full" id="wpforms-1280">
                        <form id="wpforms-form-1280" className="wpforms-validate wpforms-form form-group" onSubmit={handleSubmit}>
                            <div className="wpforms-head-container">
                                <div className="wpforms-title">Contact Form</div>
                            </div>
                            <div className="wpforms-field-container">
                                <div className="wpforms-field wpforms-field-name wpforms-one-half wpforms-first form-group">
                                    <label className="wpforms-field-label wpforms-label-hide" htmlFor="name">Name <span className="wpforms-required-label">*</span></label>
                                    <input type="text" id="name" className="wpforms-field-large wpforms-field-required form-control" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                                </div>
                                <div className="wpforms-field wpforms-field-email wpforms-one-half form-group">
                                    <label className="wpforms-field-label wpforms-label-hide" htmlFor="email">Email <span className="wpforms-required-label">*</span></label>
                                    <input type="email" id="email" className="wpforms-field-large wpforms-field-required form-control" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className="wpforms-field wpforms-field-select wpforms-one-half wpforms-first wpforms-field-select-style-modern form-group">
                                    <label className="wpforms-field-label" htmlFor="about">What is this about?</label>
                                    <select id="about" className="wpforms-field-medium choicesjs-select choices__input choices__input--hidden" name="about" value={formData.about} onChange={handleChange}>
                                        <option value="A comment">A comment</option>
                                        <option value="A question">A question</option>
                                        <option value="An invitation for a talk / lecture">An invitation for a talk / lecture</option>
                                        <option value="A request for an interview">A request for an interview</option>
                                        <option value="Something I think you would want to know about">Something I think you would want to know about</option>
                                    </select>
                                </div>
                                <div className="wpforms-field wpforms-field-select wpforms-one-half wpforms-field-select-style-modern form-group">
                                    <label className="wpforms-field-label" htmlFor="urgency">How urgent is this?</label>
                                    <select id="urgency" className="wpforms-field-medium choicesjs-select choices__input choices__input--hidden" name="urgency" value={formData.urgency} onChange={handleChange}>
                                        <option value="Next month is fine">Next month is fine</option>
                                        <option value="Next week is ok">Next week is ok</option>
                                        <option value="Next day, please">Next day, please</option>
                                        <option value="Drop everything and deal with it ASAP">Drop everything and deal with it ASAP</option>
                                    </select>
                                </div>
                                <div className="wpforms-field wpforms-field-radio form-group">
                                    <label className="wpforms-field-label" htmlFor="reply">Do you need a reply?</label>
                                    <ul id="reply">
                                        <li className="choice-1 depth-1">
                                            <input type="radio" id="reply-yes" name="reply" value="Yes" checked={formData.reply === 'Yes'} onChange={handleChange} />
                                            <label htmlFor="reply-yes">Yes</label>
                                        </li>
                                        <li className="choice-2 depth-1">
                                            <input type="radio" id="reply-no" name="reply" value="No" checked={formData.reply === 'No'} onChange={handleChange} />
                                            <label htmlFor="reply-no">No</label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="wpforms-field wpforms-field-text form-group">
                                    <label className="wpforms-field-label wpforms-label-hide" htmlFor="subject">Subject</label>
                                    <input type="text" id="subject" className="wpforms-field-large form-control" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
                                </div>
                                <div className="wpforms-field wpforms-field-textarea form-group">
                                    <label className="wpforms-field-label wpforms-label-hide" htmlFor="message">Message <span className="wpforms-required-label">*</span></label>
                                    <textarea id="message" className="wpforms-field-medium wpforms-field-required form-control" name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
                                </div>
                            </div>
                            <div className="wpforms-submit-container">
                                <button type="submit" className="wpforms-submit" aria-live="assertive">Send message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}