import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const photos = [
    '/images/AmirRaz.jpeg',
    '/images/longpfp.jpg',
    '/images/raz.jpeg',
];

const Slideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
        }, 4000); // Change photo every 4 seconds

        return () => clearInterval(interval);
    }, []);

    const handleScrollDown = () => {
        const section = document.getElementById('target-section');
        if (section) {
            section.scrollIntoView({behavior: 'smooth'});
        }
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="slideshow wrapper">
            <div
                className="slideshow-wrapper"
                style={{transform: `translateX(-${currentIndex * 100}%)`}}
            >
                {photos.map((photo, index) => (
                    <img
                        key={index}
                        src={photo}
                        alt="Slideshow"
                        className="slideshow-image"
                    />
                ))}
            </div>
            <div className="banner-text">
                <div className="banner-subtext">
                    <span>
                        Psychiatry <br/>
                        Neurology <br/>
                        Neurosurgery <br/>
                        Psychology <br/>
                    </span>

                </div>
                AMIR RAZ
                <div className="banner-subsubtext">
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
                        onClick={() => handleDotClick(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Slideshow;