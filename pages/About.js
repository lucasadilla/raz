// pages/About.js
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
    return (
        <div>
            <Navbar/>
            <main className="main-content">
                <img src="/images/profile%20picture.jpg" alt="Banner" className="about-banner"/>
                <p className="about-text">Dr. Amir Raz is a world-renowned expert on the science of suggestion with
                    recent positions as Canada
                    Research Chair, Professor of Psychiatry, Neurology and Neurosurgery, and Psychology at McGill
                    University, and as Founding Director of The Institute for Interdisciplinary Brain and Behavioral
                    Sciences at Chapman University. Formerly at Columbia University and Cornell Medical Center, his work
                    has been covered widely in the media and he has written over 200 peer-reviewed articles in Nature,
                    PNAS, and other leading journals.</p>
            </main>
            <Footer/>
        </div>
    );
};

export default About;