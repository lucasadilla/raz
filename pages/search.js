// pages/search.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import { useEffect, useState, useCallback } from 'react';
import debounce from 'lodash/debounce';

const Search = () => {
    const router = useRouter();
    const { query } = router.query;
    const [searchQuery, setSearchQuery] = useState(query || '');
    const [results, setResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchResults = useCallback(debounce((query, page) => {
        fetch(`/api/search?query=${query}&page=${page}&limit=10`)
            .then(response => response.json())
            .then(data => {
                setResults(data.results);
                setTotalPages(data.totalPages);
            })
            .catch(error => console.error('Error fetching search results:', error));
    }, 300), []);

    useEffect(() => {
        if (searchQuery) {
            fetchResults(searchQuery, currentPage);
        }
    }, [searchQuery, currentPage, fetchResults]);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div>
            <Navbar />
            <div className="search-page">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search..."
                />
                <h1>Search Results for "{searchQuery}"</h1>
                <div className="search-results">
                    {results.length > 0 ? (
                        results.map((result, index) => (
                            <div key={index} className="search-result-item">
                                <h3>{result.title}</h3>
                                <p>{result.authors}</p>
                                <a href={result.link} target="_blank" rel="noopener noreferrer">Read more</a>
                            </div>
                        ))
                    ) : (
                        <p>No results found</p>
                    )}
                </div>
                <div className="pagination">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            disabled={currentPage === index + 1}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Search;