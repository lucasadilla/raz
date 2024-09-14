// pages/index.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import ImageCarousel from "../components/ImageCarousel";
import RecentPublicationsBanner from "../components/RecentPublicationsBanner";


const images = [
    { src: "/images/photos/desert.jpeg", alt: "Desert", text: "“Some recent science for dessert”" },
];

const publications = [
    { image: "/images/publications/pub1.jpg", title: "Moderate–severe beta-thalassemia intermedia phenotype caused by sextuplicated alpha-globin gene allele in two beta-thalassemia carriers", authors: "Ahlem Achour, Jeroen Knijnenburg, Tamara Koopmann, Amir Raz, Marc Tischkowitz, Thomas D. Coates, F. Baas, C. L. Harteveld", year: "2024" },
    { image: "/images/publications/pub2.jpg", title: "Publication 2", authors: "Author 3, Author 4", year: "2022" },
    { image: "/images/publications/pub3.jpg", title: "Publication 3", authors: "Author 5, Author 6", year: "2021" },
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
                    <a href="/Books" className="book-image">
                        <img src="/images/logos/3D cover.png" alt="The Suggestible Brain" className="book-image-index"/>
                    </a>
                </div>
                <RecentPublicationsBanner publications={publications}/>
                <div className="pictures-page">
                    <ImageCarousel images={images}/>
                </div>
            </main>
            <Footer/>
        </div>
    );
}