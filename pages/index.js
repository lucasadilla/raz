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
    { title: "When can deception be good for you? | Amir Raz | TEDxMontreal", source: "", link: "https://www.youtube.com/embed/XcUGHTEVgk0?si=oe_leeIvzR7iPwuN", video:"https://www.youtube.com/embed/XcUGHTEVgk0?si=oe_leeIvzR7iPwuN" },
    { title: "Dr. Amir Raz | The Suggestible Brain | Talks at Google\n", source: "", link: "https://www.youtube.com/embed/JgLQPxrOb8g?si=X6VeFolzpC9Vjivv", video:"https://www.youtube.com/embed/JgLQPxrOb8g?si=X6VeFolzpC9Vjivv" },
    { title: "The Raz Lab in Brain Magic: The Power of Placebo — CBC Documentary", source: "", link: "https://player.vimeo.com/video/117024196?h=49143d98c4", video:"https://player.vimeo.com/video/117024196?h=49143d98c4" }
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
                    description: 'Welcome to the official website of Amir Raz. Explore recent publications, media appearances, and more.',
                    images: [
                        {
                            url: 'https://www.amirraz.com/images/home/cover.png',
                            width: 800,
                            height: 600,
                            alt: 'Home - Amir Raz',
                        },
                    ],
                    site_name: 'Amir Raz',
                }}
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