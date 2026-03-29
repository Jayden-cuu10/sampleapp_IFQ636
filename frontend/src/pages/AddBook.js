import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5001/api/book', {
        title,
        author,
        price,
        type,
      });

      setMessage('Book added successfully!');
      setTitle('');
      setAuthor('');
      setPrice('');
      setType('');
    } catch (error) {
      setMessage('Failed to add book.');
      console.error(error);
    }
  };


  return (
    <div>
      <Link to="/dashboard">Back to dashboard</Link>
      <h1>Add Book</h1>
      <p>Add a new book here.</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <br />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter book title"
          />
        </div>

        <div>
          <label>Author</label>
          <br />
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter author name"
          />
        </div>

        <div>
          <label>Price</label>
          <br />
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter price"
          />
        </div>

        <div>
          <label>Type</label>
          <br />
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            placeholder="Enter book type"
          />
        </div>

        <br />
        <button type="submit">Add Book</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default AddBook;
