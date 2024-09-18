import publications from '../../data/publications.json';
import books from '../../data/books.json';
import media from '../../data/media.json';

export default function handler(req, res) {
    const { query, page = 1, limit = 10 } = req.query;
    const searchQuery = query.toLowerCase();

    const filterResults = (data) => {
        return data.filter(item =>
            item.title.toLowerCase().includes(searchQuery) ||
            (item.authors && item.authors.toLowerCase().includes(searchQuery))
        );
    };

    const filteredBooks = filterResults(books);
    const filteredMedia = filterResults(media);
    const filteredPublications = filterResults(publications);

    const totalResults = filteredBooks.length + filteredMedia.length + filteredPublications.length;
    const totalPages = Math.ceil(totalResults / limit);

    res.status(200).json({
        books: filteredBooks.slice((page - 1) * limit, page * limit),
        media: filteredMedia.slice((page - 1) * limit, page * limit),
        publications: filteredPublications.slice((page - 1) * limit, page * limit),
        totalResults,
        currentPage: parseInt(page),
        totalPages
    });
}