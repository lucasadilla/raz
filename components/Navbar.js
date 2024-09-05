// components/Navbar.js
import Link from 'next/link';
import { useRouter } from 'next/router';
import PageTitle from './PageTitle';
import Breadcrumbs from './Breadcrumbs';

export default function Navbar() {
    const router = useRouter();
    const path = router.pathname;
    const pageTitle = path === '/' ? 'Home' : path.replace('/', '').replace(/-/g, ' ').toUpperCase();

    return (
        <div>
            <nav className="navbar"> {/* Apply the navbar class */}
                <div className="flex items-center">
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/">
                                <span className="nav-link text-white">HOME</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/About">
                                <span className="nav-link text-white">ABOUT</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Articles">
                                <span className="nav-link text-white">ARTICLES</span>
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
                            <Link href="/Research">
                                <span className="nav-link text-white">RESEARCH</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Teaching">
                                <span className="nav-link text-white">TEACHING</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Pictures">
                                <span className="nav-link text-white">PICTURES</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <PageTitle title={pageTitle} />
            <Breadcrumbs />
        </div>
    );
}