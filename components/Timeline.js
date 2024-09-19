import React, { useEffect, useState } from 'react';

const Timeline = ({ data }) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [lineVisible, setLineVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            setScrollPosition(scrollPercent);
            setLineVisible(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="timeline">
            <div className={`timeline-line ${lineVisible ? 'visible' : ''}`} style={{ height: `${scrollPosition}%` }}></div>
            {data.map((item, index) => {
                const itemPosition = (index / data.length) * 100;
                return (
                    <div key={index} className={`timeline-item ${scrollPosition >= itemPosition ? 'passed visible' : ''}`}>
                        <div className="timeline-date">{item.date}</div>
                        <div className="timeline-content">
                            <h2 className="timeline-title">{item.title}</h2>
                            {item.image && (
                                <a href={item.url} target="_blank" rel="noopener noreferrer">
                                    <img src={item.image} alt={item.title} />
                                </a>
                            )}
                            {item.content ? item.content : (!item.image && <a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a>)}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Timeline;