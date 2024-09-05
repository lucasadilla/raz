// components/SoundCloudEmbed.js
import React from 'react';

const SoundCloudEmbed = ({ src, title }) => {
    return (
        <div>
            <iframe
                width="100%"
                height="166"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src={src}
                title={title}
            ></iframe>
            <div style={{
                fontSize: '10px',
                color: '#cccccc',
                lineBreak: 'anywhere',
                wordBreak: 'normal',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                fontFamily: 'Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif',
                fontWeight: 100
            }}>
                <a href="https://soundcloud.com/razlab" title="the Raz Lab" target="_blank" style={{ color: '#cccccc', textDecoration: 'none' }}>the Raz Lab</a> ·
                <a href={src} title={title} target="_blank" style={{ color: '#cccccc', textDecoration: 'none' }}>{title}</a>
            </div>
        </div>
    );
};

export default SoundCloudEmbed;