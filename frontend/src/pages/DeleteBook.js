import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function DeleteBook() {
  const [booktitle, setBooktitle] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      await axios.delete(`http://localhost:5001/api/book/title/${encodeURIComponent(booktitle)}`);
      setMessage('Book deleted successfully!');
      setBooktitle('');
    } catch (error) {
      setMessage('Failed to delete book.');
      console.error(error);
    }
  };

  return (
    <div>
      <Link to="/dashboard">Back to dashboard</Link>
      <h1>Delete Book</h1>
      <p>Delete a book by title.</p>

      <form onSubmit={handleDelete}>
        <div>
          <label>Book title</label>
          <br />
          <input
            type="text"
            value={booktitle}
            onChange={(e) => setBooktitle(e.target.value)}
            placeholder="Enter book title"
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