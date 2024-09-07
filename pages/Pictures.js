// pages/Pictures.js
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImageCarousel from "../components/ImageCarousel";

const images = [
    { src: "/images/photos/desert.jpeg", alt: "Desert", text: "“Some recent science for desert”" },
];

const Pictures = () => {
    return (
        <div>
            <Navbar />
            <main className="main-content pictures-page">
                <ImageCarousel images={images} />
            </main>
            <Footer />
        </div>
    );
};

export default Pictures;