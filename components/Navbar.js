// components/Navbar.js
import Link from 'next/link';
import { useRouter } from 'next/router';
import Breadcrumbs from './Breadcrumbs';
import PageTitle from './PageTitle';

export default function Navbar() {
    const router = useRouter();
    const isHomePage = router.pathname === '/';

    return (
        <div>
            <nav className="navbar">
                <div className="flex items-center">
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/">
                                <span className="nav-link nav-brand text-black">AMIR RAZ</span>
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
                            <Link href="/Pictures">
                                <span className="nav-link text-black">PICTURES</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/About">
                                <span className="nav-link text-black">ABOUT</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            {!isHomePage && <PageTitle />}
            {!isHomePage && <Breadcrumbs />}
        </div>
    );
}