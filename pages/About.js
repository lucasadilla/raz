// Step 4: Add specific SEO tags to individual pages
// pages/About.js
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NextSeo } from 'next-seo';

const About = () => {
    return (
        <div>
            <NextSeo
                title="About Amir Raz"
                description="Learn more about Amir Raz, a world-renowned expert on the science of suggestion."
                openGraph={{
                    url: 'https://www.amirraz.com/About',
                    title: 'About Amir Raz',
                    description: 'Learn more about Amir Raz, a world-renowned expert on the science of suggestion.',
                    images: [
                        {
                            url: 'https://www.amirraz.com/images/media/raz.jpg',
                            width: 800,
                            height: 600,
                            alt: 'Amir Raz',
                        },
                    ],
                    site_name: 'Amir Raz',
                }}
            />
            <Navbar />
            <main className="main-content">
                <img src="/images/media/raz.jpg" alt="Banner" className="about-banner" />
                <p className="about-text">
                    Dr. Amir Raz is a world-renowned expert on the science of suggestion with recent positions as Canada
                    Research Chair, Professor of Psychiatry, Neurology and Neurosurgery, and Psychology at McGill
                    University, and as Founding Director of The Institute for Interdisciplinary Brain and Behavioral
                    Sciences at Chapman University. Formerly at Columbia University and Cornell Medical Center, his work
                    has been covered widely in the media and he has written over 200 peer-reviewed articles in Nature,
                    PNAS, and other leading journals.
                </p>
            </main>
            <Footer />
        </div>
    );
};

export default About;