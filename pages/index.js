import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import RecentPublicationsBanner from "../components/RecentPublicationsBanner";
import RecentMediaBanner from "../components/RecentMediaBanner";
import Slideshow from '../components/Slideshow';
import { NextSeo } from 'next-seo';

const publications = [
    { title: "Moderate–severe beta-thalassemia intermedia phenotype caused by sextuplicated alpha-globin gene allele in two beta-thalassemia carriers", authors: "Amir Raz, Et al.", link: "https://doi.org/10.1002/ajh.27386" },
    { title: "Suggestion alters Stroop automaticity: Hypnotic alexia through a proactive lens.", authors: "Amir Raz, Et al.", link: "https://psycnet.apa.org/doi/10.1037/cns0000268" },
    { title: "The Rubber Hand Illusion: Top-down attention modulates embodiment", authors: "Amir Raz, Et al.", link: "https://pubmed.ncbi.nlm.nih.gov/35073801/" },
];

const media = [
    { title: "Dr. Amir Raz | The Suggestible Brain | Talks at Google", source: "", link: "https://www.youtube.com/embed/JgLQPxrOb8g?si=X6VeFolzpC9Vjivv", video:"https://www.youtube.com/embed/JgLQPxrOb8g?si=X6VeFolzpC9Vjivv" },
    { title: "The Science of Suggestion: Who Can You Trust?", source: "", link: "https://www.youtube.com/embed/8NE96DissZM?si=HsbYPlWQxouROY9b", video:"https://www.youtube.com/embed/8NE96DissZM?si=HsbYPlWQxouROY9b" },
    { title: "When can deception be good for you? | Amir Raz | TEDxMontreal", source: "", link: "https://www.youtube.com/embed/XcUGHTEVgk0?si=oe_leeIvzR7iPwuN", video:"https://www.youtube.com/embed/XcUGHTEVgk0?si=oe_leeIvzR7iPwuN" }
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
            <NextSeo
                title="Home - Amir Raz"
                description="Welcome to the official website of Amir Raz. Explore recent publications, media appearances, and more."
                openGraph={{
                    url: 'https://www.amirraz.com',
                    title: 'Home - Amir Raz',
                    description: 'Explore Amir Raz’s research, books, media, and publications.',
                    images: [
                        {
                            url: 'https://www.amirraz.com/images/home/cover.png',
                            width: 800,
                            height: 600,
                            alt: 'Amir Raz Home',
                        },
                    ],
                    site_name: 'Amir Raz',
                }}
                additionalMetaTags={[
                    { name: "keywords", content: "Amir Raz, science of suggestion, neuroscience, books, publications, research, professor" }
                ]}
                additionalLinkTags={[
                    { rel: "canonical", href: "https://www.amirraz.com" }
                ]}
            />
            <Navbar />
            <main className="main-content index-page">
                <Slideshow />
                <div id="target-section">
                    <div className="blue-banner">
                        <div className="new-release-text">NEW RELEASE</div>
                        <a href="/Books" className="book-image">
                            <img src="/images/logos/3D cover.png" alt="The Suggestible Brain" className="book-image-index"/>
                        </a>
                    </div>
                    <RecentMediaBanner media={media}/>
                    <RecentPublicationsBanner publications={publications}/>
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