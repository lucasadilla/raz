// components/ImageCarousel.js
import { useState } from "react";

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="carousel">
            <button onClick={handlePrev} className="carousel-button prev-button">&#9664;</button>
            <div className="carousel-content">
                <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="carousel-image" />
                <p>{images[currentIndex].text}</p>
            </div>
            <button onClick={handleNext} className="carousel-button next-button">&#9654;</button>
        </div>
    );
};

export default ImageCarousel;