import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const photos = [
    '/images/AmirRaz.jpg',
    '/images/longpfp.jpg',
    '/images/media/raz.jpg',
];

const Slideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
        }, 3000); // Change photo every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const handleScrollDown = () => {
        const section = document.getElementById('target-section');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="slideshow">
            <img src={photos[currentIndex]} alt="Slideshow" className="slideshow-image" />
            <div className="banner-text">
                <div className="banner-subtext">Psychiatry, Neurology and Neurosurgery, and Psychology</div>
                AMIR RAZ
                <div className="banner-subtext">
                    <Link href="/About">
                        <span className="about-index">ABOUT AMIR RAZ</span>
                    </Link>
                </div>
            </div>
            <div className="scroll-down-arrow" onClick={handleScrollDown}>
                &#x2193; {/* Downward arrow symbol */}
            </div>
            <div className="dots">
                {photos.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Slideshow;