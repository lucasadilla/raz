// pages/index.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import ImageCarousel from "../components/ImageCarousel";

const images = [
    { src: "/images/photos/desert.jpeg", alt: "Desert", text: "“Some recent science for desert”" },
];

export default function Home() {
    const router = useRouter();


    return (
        <div>
            <Navbar />
            <main className="main-content index-page">
                <div className="banner-container">
                    <img src="/images/longpfp.jpg" alt="Banner" className="banner-image"/>
                    <div className="banner-text">
                        <div className="banner-subtext">Psychiatry, Neurology and Neurosurgery, and Psychology</div>
                        AMIR RAZ
                    </div>
                </div>
                <div className="blue-banner">
                    <div className="left-images">
                        <img src="/images/suggestible/hand.png"/>
                        <img src="/images/suggestible/available.png"/>
                        <img src="/images/suggestible/oct.png"/>
                        <img src="/images/suggestible/2024.png"/>
                        <img src="/images/suggestible/brain.png"/>
                    </div>
                    <a href="/Books">
                        <img src="/images/logos/3D cover.png" alt="The Suggestible Brain" className="book-image-index"/>
                    </a>
                    <div className="right-text">
                        <p>Available at:</p>
                        <div className="available-images">
                            <img src="/images/books/logos/amazon.png" alt="Store 1"/>
                            <img src="/images/books/logos/hachette.png" alt="Store 2"/>
                            <img src="/images/books/logos/hachette-audio.png" alt="Store 3"/>
                        </div>
                    </div>
                </div>
                <div className="pictures-page">
                    <ImageCarousel images={images}/>
                </div>
            </main>
            <Footer/>
        </div>
    );
}