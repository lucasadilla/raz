// components/VideoEmbed.js
const VideoEmbed = ({ src, title }) => (
    <div className="video-embed">
        <iframe
            className="video-iframe"
            src={src}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    </div>
);

export default VideoEmbed;