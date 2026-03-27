import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function DeleteBook() {
  const [bookId, setBookId] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      await axios.delete(`http://localhost:5001/api/book/${bookId}`);
      setMessage('Book deleted successfully!');
      setBookId('');
    } catch (error) {
      setMessage('Failed to delete book.');
      console.error(error);
    }
  };

  return (
    <div>
      <Link to="/dashboard">Back to dashboard</Link>
      <h1>Delete Book</h1>
      <p>Delete a book by id.</p>

      <form onSubmit={handleDelete}>
        <div>
          <label>Book ID</label>
          <br />
          <input
            type="text"
            value={bookId}
            onChange={(e) => setBookId(e.target.value)}
            placeholder="Enter book id"
          />
        </div>

        <br />
        <button type="submit">Delete Book</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default DeleteBook;