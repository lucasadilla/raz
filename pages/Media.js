// pages/Media.js
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import VideoEmbed from "../components/VideoEmbed";
import Link from "next/link";

const Media = () => {
    return (
        <div>
            <Navbar />
            <main className="main-content">
                <li>
                    <Link href="/Video">
                        <span className="nav-link text-black">VIDEO</span>
                    </Link>
                </li>
                <li>
                    <Link href="/Audio">
                        <span className="nav-link text-black">AUDIO</span>
                    </Link>
                </li>
                <li>
                    <Link href="/Articles">
                        <span className="nav-link text-black">ARTICLES</span>
                    </Link>
                </li>
                <VideoEmbed src="https://www.youtube.com/embed/vg540H9uHuA?si=lvZVxbv7zulclSmt"
                            title="The Magic and Deception with Dr. Amir Raz"/>
                <VideoEmbed src="https://www.youtube.com/embed/3evqptjrGGs?si=XAZppHtwGGFIA9lC"
                            title="YouTube video player"/>
                <VideoEmbed src="https://www.youtube.com/embed/vLAvoaln8oU?si=qkJUQ0-k0FZplbRY" title="YouTube Video"/>
                <VideoEmbed
                    src="https://player.vimeo.com/video/117024196?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    title="Vimeo Video"/>
                <VideoEmbed
                    src="https://player.vimeo.com/video/221348961?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    title="Vimeo Video"/>
            </main>
            <Footer/>
        </div>
    );
};

export default Media;