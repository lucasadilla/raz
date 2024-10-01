// pages/invite.js
import { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from 'next/link';

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
            <Navbar />
            <div className="invite-container">
                {sections.map((section, index) => (
                    <div className="invite-tile">
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