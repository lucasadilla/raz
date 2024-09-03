// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-white p-4 flex justify-between items-center">
            <div className="flex items-center">
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/">
                            <span className="nav-link text-black">HOME</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/About">
                            <span className="nav-link text-black">ABOUT</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Articles">
                            <span className="nav-link text-black">ARTICLES</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Books">
                            <span className="nav-link text-black">BOOKS</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Media">
                            <span className="nav-link text-black">MEDIA</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Research">
                            <span className="nav-link text-black">RESEARCH</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Teaching">
                            <span className="nav-link text-black">TEACHING</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <a href="https://www.instagram.com/femmesetdroit/" target="_blank" rel="noopener noreferrer">
                <img src="/images/insta.png" alt="Instagram" className="instagram-icon w-8 h-8"/>
            </a>
        </nav>
    );
}