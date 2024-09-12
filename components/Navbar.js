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
                                <span className="nav-link nav-brand text-white">AMIR RAZ</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Publications">
                                <span className="nav-link text-white">PUBLICATIONS</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Books">
                                <span className="nav-link text-white">BOOKS</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Media">
                                <span className="nav-link text-white">MEDIA</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/About">
                                <span className="nav-link text-white">ABOUT</span>
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