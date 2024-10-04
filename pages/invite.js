// pages/invite.js
import { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from 'next/link';
import { NextSeo } from 'next-seo';

const sections = [
    { title: "Corporate", buttonText: "Book Now", imageUrl: "/images/invite/corporate.png" },
    { title: "Small Group", buttonText: "Book Now", imageUrl: "/images/invite/small.png" },
    { title: "Individual Sessions", buttonText: "Book Now", imageUrl: "/images/invite/solo.jpg" },
    { title: "Public Speaking", buttonText: "Book Now", imageUrl: "/images/invite/public.jpg" },
    { title: "Coaching", buttonText: "Book Now", imageUrl: "/images/invite/coaching.jpg" },
    { title: "Consulting to companies, organizations, universities", buttonText: "Book Now", imageUrl: "/images/invite/consult.png" }
];

const Invite = () => {
    return (
        <div>
            <NextSeo
                title="Invite Amir Raz"
                description="Book Amir Raz for corporate events, small group sessions, individual sessions, public speaking, coaching, and consulting."
                openGraph={{
                    url: 'https://www.amirraz.com/invite',
                    title: 'Invite Amir Raz',
                    description: 'Book Amir Raz for corporate events, small group sessions, individual sessions, public speaking, coaching, and consulting.',
                    images: [
                        {
                            url: 'https://www.amirraz.com/images/invite/cover.png',
                            width: 800,
                            height: 600,
                            alt: 'Invite Amir Raz',
                        },
                    ],
                    site_name: 'Amir Raz',
                }}
            />
            <Navbar />
            <div className="invite-container">
                {sections.map((section, index) => (
                    <div className="invite-tile" key={index}>
                        <div className="invite-image-container">
                            <img src={section.imageUrl} alt="Invite Image" className="invite-image"/>
                        </div>
                        <div className="invite-title-overlay">
                            <h2 className="invite-title">{section.title}</h2>
                        </div>
                        <Link href="/Contact" legacyBehavior>
                            <a className="invite-button">{section.buttonText}</a>
                        </Link>
                    </div>
                ))}
            </div>
            <Footer/>
        </div>
    );
};

export default Invite;