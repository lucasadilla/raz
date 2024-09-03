// pages/Articles.js
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Articles = () => {
    return (
        <div>
            <Navbar/>
            <main className="main-content">
                <h1>Articles Page</h1>
                <p>This is the articles page.</p>
            </main>
            <Footer />
        </div>
);
};

export default Articles;