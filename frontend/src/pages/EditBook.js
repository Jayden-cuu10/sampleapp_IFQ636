import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function EditBook() {
  const [booktitle, setBooktitle] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('');
  const [message, setMessage] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:5001/api/book/title/${encodeURIComponent(booktitle)}`, {
        title,
        author,
        price,
        type,
      });

      setMessage('Book updated successfully!');
      setBooktitle('');
      setTitle('');
      setAuthor('');
      setPrice('');
      setType('');
    } catch (error) {
      setMessage('Failed to update book.');
      console.error(error);
    }
  };

  return (
    <div>
      <Link to="/dashboard">Back to dashboard</Link>
      <h1>Edit Book</h1>
      <p>You can update the book information here.</p>

      <form onSubmit={handleUpdate}>
        <div>
          <label>Book Title</label>
          <br />
          <input
            type="text"
            value={booktitle}
            onChange={(e) => setBooktitle(e.target.value)}
            placeholder="Enter book Title"
          />
        </div>

        <div>
          <label>New Title</label>
          <br />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter new title"
          />
        </div>

        <div>
          <label>New Author</label>
          <br />
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter new author"
          />
        </div>

        <div>
          <label>New Price</label>
          <br />
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter new price"
          />
        </div>

        <div>
          <label>Type</label>
          <br />
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            placeholder="Enter new type"
          />
        </div>

        <br />
        <button type="submit">Update Book</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default EditBook;