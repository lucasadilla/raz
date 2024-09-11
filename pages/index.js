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
            <main className="main-content">
                <img src="/images/media/raz.jpg" alt="Banner" className="banner-image"/>
                <div className="banner">
                    <h2>The Suggestible Brain</h2>
                    <div className="banner-content">
                        <img src="/images/logos/3D cover.png" alt="The Suggestible Brain" className="banner-book-image"/>
                    </div>
                    <p onClick={handleLinkClick} className="all-books-link">All Books</p>
                </div>
            </main>
            <Footer/>
        </div>
    );
}