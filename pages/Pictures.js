// pages/Pictures.js
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Pictures = () => {
    return (
        <div>
            <Navbar/>
            <main className="main-content">
                <img src="/images/photos/desert.jpeg"/>
                <p>“Some recent science for desert”</p>
            </main>
            <Footer/>
        </div>
    );
};

export default Pictures;