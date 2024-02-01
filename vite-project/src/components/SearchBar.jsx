import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; //Import react-router-dom
import axios from 'axios'; // Import Axios library

const SearchBar = () => {
    // State variables for search input and books data
    const [search, setSearch] = useState('');
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // Fetch data
        const fetchData = async () => {
            try {
                // Use Axios to make a GET request to fetch books data
                const response = await axios.get('https://reactnd-books-api.udacity.com/books', {
                    headers: {
                        'Authorization': 'whatever-you-want',
                    },
                });
                // Set the fetched books data in the state
                setBooks(response.data.books);
            } catch (error) {
                // Handle errors if the request fails
                console.error('Error fetching books:', error);
            }
        };

        // Call the fetchData function
        fetchData();
    }, []);

    // Handle search input changes
    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    // Filter books based on the input
    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        // component structure
        <div className="container">
            {/* Navigation bar */}
            <div className="nav-bar">
                <div className='logo'>
                    <img  src={'https://camo.githubusercontent.com/7798ac9816844b12782b0a86e183dd4029f2070daf2dc3fcd77a1c1138d2ffd7/68747470733a2f2f73332e61702d736f7574682d312e616d617a6f6e6177732e636f6d2f6b616c76692d656475636174696f6e2e6769746875622e696f2f66726f6e742d656e642d7765622d646576656c6f706d656e742f4b616c7669756d2d4c6f676f2e706e67'} alt="Logo" />
                </div>
                <Link to="/registrationform">
                    <button className="reg-btn">REGISTER</button>
                </Link>
            </div>

            {/* Welcome phrase */}
            <div>
                <p className='phrase'>Where every reader finds their story!</p>
            </div>

            {/* Search input and button */}
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search"
                    value={search}
                    className='search-input'
                    onChange={handleSearch}
                />
                <button type="submit" className='search-btn'>Search</button>
            </div>

            {/* Display filtered book list */}
            <div className="book-list">
                {filteredBooks.map((book, index) => (
                    <div key={index} className="book-item">
                        <h3>{book.title}</h3>
                        <img src={book.imageLinks.smallThumbnail} alt={book.title} />
                        <p>Rating: {book.averageRating} /5</p>
                        <p>Price: Free</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchBar;
