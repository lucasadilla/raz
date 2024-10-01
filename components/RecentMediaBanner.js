// components/RecentMediaBanner.js
import React from 'react';
import { useRouter } from 'next/router';

const RecentMediaBanner = ({ media }) => {
    const router = useRouter();

    const handleMoreMediaClick = () => {
        router.push('/Media');
    };

    const renderMediaContent = (item) => {
        if (item.image) {
            return <img src={item.image} alt={item.title} className="media-image" />;
        } else if (item.video) {
            return (
                <div className="media-video">
                    <iframe src={item.video} title={item.title} allowFullScreen></iframe>
                </div>
            );
        } else if (item.audio) {
            return <iframe src={item.audio} title={item.title} className="media-audio" frameBorder="0" allow="autoplay"></iframe>;
        } else {
            return null;
        }
    };

    return (
        <div className="recent-media-banner">
            <h2 className="banner-title">Media Highlights</h2>
            <div className="media-cards">
                {media.map((item, index) => (
                    <div key={index} className="media-card">
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <div className="media-card-content">
                                <h3>{item.title}</h3>
                                <p>{item.source}</p>
                                {renderMediaContent(item)}
                            </div>
                        </a>
                    </div>
                ))}
            </div>
            <button className="more-media-button" onClick={handleMoreMediaClick}>More Media</button>
        </div>
    );
};

export default RecentMediaBanner;