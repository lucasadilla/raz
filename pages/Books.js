// pages/Books.js
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Books = () => {
    return (
        <div>
            <Navbar/>
            <main className="main-content">
                <h1>Books Page</h1>
                <img src="/images/books/suggestibleBrain.png"/>
                <img src="/images/books/casting-light-dark-side-imaging.png"/>
                <img src="/images/books/how-not-to-train-your-brain.png"/>
                <img src="/images/books/hypnosis-and-meditation.jpeg"/>
                <img src="/images/books/placebo-talks.jpeg"/>
                <img src="/images/books/psychology-of-magic.png"/>
                <p>This is the Books page.</p>
            </main>
            <Footer/>
        </div>
    );
};

export default Books;