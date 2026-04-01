import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Booklistpage (){
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    },[]);

    const fetchBooks = async () => {
    try {
      const res = await axios.get('http://localhost:5001/api/book');
      setBooks(res.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
    };

    console.log('Booklistpage rendered',books);

    return (
    <div style={{ padding: '20px' }}>
        <Link to="/dashboard">Back to dashboard</Link>

        <h2>All Books</h2>

        {books.length === 0 ? (
        <p>No books found.</p>
      ) : (
        books.map((book) => (
          <div
            key={book._id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '15px',
              marginBottom: '12px'
            }}
          >
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Price:</strong> {book.price}</p>
            <p><strong>type:</strong> {book.type}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Booklistpage;