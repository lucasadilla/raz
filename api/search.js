// api/search.js
import publications from '../data/publications.json';
import media from '../data/media.json';

export default function handler(req, res) {
    const { query, page = 1, limit = 10 } = req.query;
    if (!query) {
        return res.status(400).json({ error: 'Query parameter is required' });
    }

    const allData = [...publications, ...media];

    const filteredResults = allData.filter(item =>
        query.toLowerCase().split(' ').some(word =>
            item.title.toLowerCase().includes(word) ||
            (item.authors && item.authors.toLowerCase().includes(word)) ||
            (item.link && item.link.toLowerCase().includes(word)) ||
            (item.content && item.content.toLowerCase().includes(word))
        )
    );

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedResults = filteredResults.slice(startIndex, endIndex);

    res.status(200).json({
        results: paginatedResults,
        totalResults: filteredResults.length,
        currentPage: parseInt(page),
        totalPages: Math.ceil(filteredResults.length / limit)
    });
}