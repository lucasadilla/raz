import VideoEmbed from '../components/VideoEmbed';
import SoundCloudEmbed from '../components/SoundCloudEmbed';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import React from 'react';
import { NextSeo } from 'next-seo';

const Search = () => {
    const router = useRouter();
    const { query } = router.query;
    const [results, setResults] = useState({ books: [], media: [], publications: [] });

    useEffect(() => {
        if (query) {
            fetch(`/api/search?query=${query}`)
                .then(response => response.json())
                .then(data => {
                    console.log('Fetched data:', data); // Debugging log
                    setResults(data);
                })
                .catch(error => console.error('Error fetching data:', error)); // Error handling
        }
    }, [query]);

    return (
        <div>
            <NextSeo
                title={`Search results for "${query}" - Amir Raz`}
                description={`Explore search results for "${query}" on Amir Raz's official website, including books, media, and publications.`}
                openGraph={{
                    url: `https://www.amirraz.com/search?query=${query}`,
                    title: `Search results for "${query}" - Amir Raz`,
                    description: `Explore search results for "${query}" on Amir Raz's official website, including books, media, and publications.`,
                    images: [
                        {
                            url: 'https://www.amirraz.com/images/search/cover.png',
                            width: 800,
                            height: 600,
                            alt: `Search results for "${query}" - Amir Raz`,
                        },
                    ],
                    site_name: 'Amir Raz',
                }}
            />
            <Navbar />
            <div className='search-results'>
                <h1>Search results for "{query}"</h1>
                <div className='result-section'>
                    <h2>Books</h2>
                    {results.books.length > 0 ? (
                        results.books.map(book => (
                            <div key={book.title} className='result-item'>
                                <h3>{book.title}</h3>
                                <p>{book.description}</p>
                                <a href={`/Books/`} className='view-book-link'>View Book</a>
                            </div>
                        ))
                    ) : (
                        <p>No results</p>
                    )}
                </div>
                <div className='result-section'>
                    <h2>Media</h2>
                    {results.media.length > 0 ? (
                        results.media.map(media => (
                            <div key={media.title} className='result-item'>
                                <h3>{media.title}</h3>
                                {media.type === 'video' && (
                                    <VideoEmbed src={media.link} title={media.title} />
                                )}
                                {media.type === 'audio' && (
                                    <SoundCloudEmbed src={media.link} title={media.title} />
                                )}
                                {media.type === 'article' && media.image && (
                                    <a href={media.link} className='media-link'>
                                        <img src={media.image} alt={media.title} className='media-image'/>
                                    </a>
                                )}
                            </div>
                        ))
                    ) : (
                        <p>No results</p>
                    )}
                </div>
                <div className='result-section'>
                    <h2>Publications</h2>
                    {results.publications.length > 0 ? (
                        results.publications.map(publication => (
                            <div key={publication.title} className='result-item'>
                                <h3>{publication.title}</h3>
                                <a href={publication.link}>Read Publication</a>
                            </div>
                        ))
                    ) : (
                        <p>No results</p>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Search;