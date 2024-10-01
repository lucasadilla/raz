// pages/index.js
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import RecentPublicationsBanner from "../components/RecentPublicationsBanner";
import RecentMediaBanner from "../components/RecentMediaBanner";
import Slideshow from '../components/Slideshow';

const publications = [
    { title: "Moderate–severe beta-thalassemia intermedia phenotype caused by sextuplicated alpha-globin gene allele in two beta-thalassemia carriers", authors: "Amir Raz, Et al.", link: "https://doi.org/10.1002/ajh.27386" },
    { title: "Suggestion alters Stroop automaticity: Hypnotic alexia through a proactive lens.", authors: "Amir Raz, Et al.", link: "https://psycnet.apa.org/doi/10.1037/cns0000268" },
    { title: "The Rubber Hand Illusion: Top-down attention modulates embodiment", authors: "Amir Raz, Et al.", link: "https://pubmed.ncbi.nlm.nih.gov/35073801/" },
];

const media = [
    { title: "Rosenthal with Amir Raz", source: "", link: "https://www.msch.us/education/2022-rosenthal-with-amir-raz/", image: "/images/media/raz.jpg" },
    { title: "Amir Raz on the Science of Suggestion", source: "", link: "https://news.chapman.edu/2021/12/15/chapmans-brain-institute-applies-modern-tools-of-neuroscience-to-answer-age-old-questions-of-free-will/", image: "/images/media/chapman.jpg" },
    { title: "Finding Your Soul Podcast", source: "", link: "https://www.youtube.com/embed/vg540H9uHuA", video:"https://www.youtube.com/embed/vg540H9uHuA" },
];

export default function Home() {
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState('');

    const scrollToContent = () => {
        const content = document.getElementById('content');
        if (content) {
            content.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleBeforeUnload = (event) => {
        event.preventDefault();
        setShowModal(true);
        return (event.returnValue = 'Are you sure you want to leave?');
    };

    const handleEmailSubmit = async () => {
        try {
            const response = await fetch('/api/save-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                console.log('Email saved successfully');
            } else {
                console.error('Failed to save email');
            }
        } catch (error) {
            console.error('Error submitting email:', error);
        }

        setShowModal(false);
    };

    useEffect(() => {
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    return (
        <div>
            <Navbar />
            <Slideshow />
            <main className="main-content index-page">
                <div id="content">
                        <div className="blue-banner">
                            <div className="new-release-text">NEW RELEASE</div>
                            <a href="/Books" className="book-image">
                                <img src="/images/logos/3D cover.png" alt="The Suggestible Brain"
                                     className="book-image-index"/>
                            </a>
                            <div className="left-images">
                                <img src="/images/suggestible/available.png" alt="Available"/>
                                <img src="/images/suggestible/oct.png" alt="October"/>
                                <img src="/images/suggestible/2024.png" alt="2024"/>
                            </div>
                        </div>
                    <RecentPublicationsBanner publications={publications}/>
                    <RecentMediaBanner media={media}/>
                </div>
            </main>
            <Footer/>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>We hate to see you go!</h2>
                        <p>Would you like to join our mailing list before you leave?</p>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button onClick={handleEmailSubmit}>Submit</button>
                        <button onClick={() => setShowModal(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}