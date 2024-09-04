// components/VideoEmbed.js
const VideoEmbed = ({ src, title, width = "560", height = "315", referrerPolicy = "strict-origin-when-cross-origin" }) => {
    return (
        <div className="video-embed">
            <iframe
                src={src}
                title={title}
                width={width}
                height={height}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy={referrerPolicy}
                allowFullScreen
                className="video-iframe"
            ></iframe>
        </div>
    );
};

export default VideoEmbed;