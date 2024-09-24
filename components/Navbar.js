// components/Navbar.js
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Breadcrumbs from './Breadcrumbs';
import PageTitle from './PageTitle';

export default function Navbar() {
    const router = useRouter();
    const isHomePage = router.pathname === '/';
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/search?query=${searchQuery}`);
        }
    };

    const isActive = (path) => router.pathname === path ? 'active-link' : '';

    return (
        <div>
            <nav className="navbar">
                <div className="amir-raz-item">
                    <Link href="/">
                        <span className="amir-raz">AMIR RAZ</span>
                    </Link>
                </div>
                <ul className="navbar-items">
                    <li>
                        <Link href="/Publications">
                            <span className={`nav-link ${isActive('/Publications')}`}>PUBLICATIONS</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Books">
                            <span className={`nav-link ${isActive('/Books')}`}>BOOKS</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Media">
                            <span className={`nav-link ${isActive('/Media')}`}>MEDIA</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Contact">
                            <span className={`nav-link ${isActive('/Contact')}`}>CONTACT</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/About">
                            <span className={`nav-link ${isActive('/About')}`}>ABOUT</span>
                        </Link>
                    </li>
                </ul>
                <form onSubmit={handleSearchSubmit} className="search-form">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleInputChange}
                        className="search-input"
                    />
                    <button type="submit" className="search-button">Search</button>
                </form>
            </nav>
            {!isHomePage && <PageTitle />}
            {!isHomePage && <Breadcrumbs />}
        </div>
    );
}