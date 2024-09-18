// pages/index.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import ImageCarousel from "../components/ImageCarousel";
import RecentPublicationsBanner from "../components/RecentPublicationsBanner";
import RecentMediaBanner from "../components/RecentMediaBanner";
import Link from "next/link";
import React from "react";

const images = [
    { src: "/images/photos/desert.jpeg", alt: "Desert", text: "“Some recent science for dessert”" },
];

const publications = [
    { title: "Moderate–severe beta-thalassemia intermedia phenotype caused by sextuplicated alpha-globin gene allele in two beta-thalassemia carriers", authors: "Amir Raz, Et al.", link: "https://doi.org/10.1002/ajh.27386" },
    { title: "Suggestion alters Stroop automaticity: Hypnotic alexia through a proactive lens.", authors: "Amir Raz, Et al.", link: "https://psycnet.apa.org/doi/10.1037/cns0000268" },
    { title: "The Rubber Hand Illusion: Top-down attention modulates embodiment", authors: "Amir Raz, Et al.", link: "https://pubmed.ncbi.nlm.nih.gov/35073801/" },
];

const media = [
    { title: "Rosenthal with Amir Raz", source: "", link: "https://www.msch.us/education/2022-rosenthal-with-amir-raz/", image: "/images/media/raz.jpg" },
    { title: "Amir Raz on the Science of Suggestion", source: "", link: "https://news.chapman.edu/2021/12/15/chapmans-brain-institute-applies-modern-tools-of-neuroscience-to-answer-age-old-questions-of-free-will/", image: "/images/media/chapman.jpg" },
    { title: "Finding Your Soul Podcast", source: "", link: "https://www.youtube.com/embed/vg540H9uHuA", video:"https://www.youtube.com/embed/vg540H9uHuA" },
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
                        <div className="banner-subtext">
                            <Link href="/About">
                                <span className="about-index">ABOUT AMIR RAZ</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="blue-banner">
                    <div className="new-release-text">NEW RELEASE</div>
                    <a href="/Books" className="book-image">
                        <img src="/images/logos/3D cover.png" alt="The Suggestible Brain"
                             className="book-image-index"/>
                    </a>
                    <div className="left-images">
                        <img src="/images/suggestible/available.png" alt="Available"/>
                        <img src="/images/suggestible/oct.png" alt="October"/>
                        <img src="/images/suggestible/2024.png" alt="2024"/>
                    </div>
                </div>
                <RecentPublicationsBanner publications={publications}/>
                <RecentMediaBanner media={media}/>
                <div className="pictures-section">
                    <h1>Pictures</h1>
                    <ImageCarousel images={images}/>
                </div>
            </main>
            <Footer/>
        </div>
    );
}