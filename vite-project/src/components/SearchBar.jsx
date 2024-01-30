import { useState, useEffect } from 'react';

const SearchBar = () => {
    const [search, setSearch] = useState('');
    const [books, setBooks] = useState([]); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://reactnd-books-api.udacity.com/books', {
                    headers: {
                        'Authorization': 'whatever-you-want',
                    },
                });
                const data = await response.json();
                setBooks(data.books);
            } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    fetchData();
    }, []);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };  

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={handleSearch}/>
                <button type="submit">Search</button>
            </div>
            <div className="book-list">
            {filteredBooks.map((book, index) => (
                <div key={index} className="book-item">
                <h3>{book.title}</h3>
                <p>Author: {book.author}</p>
                <img src={book.image} alt={book.title} />
                <p>Price: ${book.price}</p>
                </div>
            ))}
            </div>
        </div>
    );
};

export default SearchBar;