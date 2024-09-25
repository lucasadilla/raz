import React, { useState } from 'react';
import { useRouter } from 'next/router';

const RecentPublicationsBanner = ({ publications }) => {
    const router = useRouter();

    const handleCardClick = (link) => {
        window.open(link, "_blank");
    };

    const handleMorePublicationsClick = () => {
        router.push('/Publications');
    };

    return (
        <div className="recent-publications-banner">
            <h2 className="recent-publications-title">Recent Publications</h2>
            <div className="recent-publications-cards">
                {publications.map((publication, index) => (
                    <div key={index} className="index-publication-item" onClick={() => handleCardClick(publication.link)}>
                        <h3 className="index-publication-title">{publication.title}</h3>
                        <p className="index-publication-authors">{publication.authors}</p>
                        <p className="index-publication-year">{publication.year}</p>
                    </div>
                ))}
            </div>
            <button className="more-publications-button" onClick={handleMorePublicationsClick}>More Publications</button>
        </div>
    );
};

export default RecentPublicationsBanner;