// components/SoundCloudEmbed.js
import React from 'react';

const SoundCloudEmbed = ({ src, title }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <iframe
                width="500"
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
            </div>
        </div>
    );
};

export default SoundCloudEmbed;