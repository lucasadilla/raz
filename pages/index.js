// pages/index.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div>
            <Navbar />
            <main className="main-content">
                <img src="/images/profile picture.JPG" alt="Banner" className="w-full h-auto"/>
            </main>
            <Footer/>
        </div>
    );
}