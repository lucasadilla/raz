// components/RecentPublicationsBanner.js
import React from 'react';

const RecentPublicationsBanner = ({ publications }) => {
    const recentPublications = publications.slice(0, 3);

    return (
        <div className="recent-publications-banner">
            {recentPublications.map((publication, index) => (
                <div key={index} className="publication-item">
                    <img src={publication.image} alt={publication.title} className="publication-image" />
                    <h3 className="publication-title">{publication.title}</h3>
                    <p className="publication-authors">{publication.authors}</p>
                    <p className="publication-year">{publication.year}</p>
                </div>
            ))}
        </div>
    );
};

export default RecentPublicationsBanner;