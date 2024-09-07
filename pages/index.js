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
                        <p className="quote">“Professor Amir Raz is a consummate scientist and former professional magician. His scientific research and writing have made substantial contributions to our understanding of hypnosis, placebo effects, and suggestion. His book will amaze and entertain you, while at the same time being firmly rooted in the scientific data. It is a magical book.”--Irving Kirsch, PhD, author of The Emperor’s New Drugs: Exploding the Antidepressant Myth</p>
                        <img src="/images/books/suggestibleBrain.png" alt="The Suggestible Brain" className="banner-book-image"/>
                        <p className="quote">"[This book] could have been titled This is Your Brain on Magic. Told from the twin perspectives of a world-renowned cognitive neuroscientist who happens to be a professional magician, you’ll never again think about what you see, hear, and experience the same way.”—Daniel Levitan, author of This is Your Brain on Music</p>
                    </div>
                    <p onClick={handleLinkClick} className="all-books-link">All Books</p>
                </div>
            </main>
            <Footer/>
        </div>
    );
}