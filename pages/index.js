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
    { title: "Moderate–severe beta-thalassemia intermedia phenotype caused by sextuplicated alpha-globin gene allele in two beta-thalassemia carriers", authors: "Amir Raz, Et al.", link: "https://doi.org/10.1002/ajh.27386" },
    { title: "Suggestion alters Stroop automaticity: Hypnotic alexia through a proactive lens.", authors: "Amir Raz, Et al.", link: "https://psycnet.apa.org/doi/10.1037/cns0000268" },
    { title: "The Rubber Hand Illusion: Top-down attention modulates embodiment", authors: "Amir Raz, Et al.", link: "https://pubmed.ncbi.nlm.nih.gov/35073801/" },
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
                <div className="pictures-section">
                    <h1>Pictures</h1>
                    <ImageCarousel images={images}/>
                </div>
            </main>
            <Footer/>
        </div>
    );
}