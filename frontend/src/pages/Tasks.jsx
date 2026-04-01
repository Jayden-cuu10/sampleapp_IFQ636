import { useState, useEffect } from 'react';
import axiosInstance from '../axiosConfig';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { useAuth } from '../context/AuthContext';

const Tasks = () => {
  const { user } = useAuth();
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axiosInstance.get('/api/book', {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setBooks(response.data);
      } catch (error) {
        alert('Failed to fetch books.');
      }
    };

    fetchBooks();
  }, [user]);

  return (
    <div className="container mx-auto p-6">
      <TaskForm
        tasks={books}
        setTasks={setBooks}
        editingTask={editingBook}
        setEditingTask={setEditingBook}
      />
      <TaskList tasks={books} setTasks={setBooks} setEditingTask={setEditingBook} />
    </div>
  );
};

export default Tasks;
