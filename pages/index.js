// pages/index.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';

export default function Home() {
    const router = useRouter();

    const handleLinkClick = () => {
        router.push('/books');
    };

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
                <div className="relative flex items-center justify-center">
                    <img src="/images/logos/3D cover.png" alt="The Suggestible Brain" className="relative w-1/2 h-1/2"/>
                </div>
                <p onClick={handleLinkClick} className="all-books-link">All Books</p>
            </main>
            <Footer/>
        </div>
    );
}