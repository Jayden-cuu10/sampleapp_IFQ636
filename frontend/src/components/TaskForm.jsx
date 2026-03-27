import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import axiosInstance from '../axiosConfig';

const BookForm = ({ tasks, setTasks, editingTask, setEditingTask }) => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({ title: '', author: '', price: '',type:'' });

  useEffect(() => {
    if (editingTask) {
      setFormData({
        title: editingTask.title ||'',
        author: editingTask.author||'',
        price: editingTask.price||'',
        type: editingTask.type ||'',
      });
    } else {
      setFormData({ title: '', author: '', price: '', type:'' });
    }
  }, [editingTask]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingTask) {
        const response = await axiosInstance.put(`/api/book/${editingTask._id}`, formData, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setTasks(tasks.map((task) => (task._id === response.data._id ? response.data : task)));
      } else {
        const response = await axiosInstance.post('/api/book', formData, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setTasks([...tasks, response.data]);
      }
      setEditingTask(null);
      setFormData({ title: '', author: '', price: '', type:'' });
    } catch (error) {
      alert('Failed to save book.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded mb-6">
      <h1 className="text-2xl font-bold mb-4">{editingTask ? 'Edit Book' : 'Add Book'}</h1>
      <input
        type="text"
        placeholder="Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        className="w-full mb-4 p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Author"
        value={formData.author}
        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
        className="w-full mb-4 p-2 border rounded"
      />
      <input
        type="number"
        placeholder="Price"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        className="w-full mb-4 p-2 border rounded"
      />

      <input
        type="text"
        placeholder="Type"
        value={formData.type}
        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
        className="w-full mb-4 p-2 border rounded"
      />
      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
        {editingTask ? 'Update Book' : 'Create Book'}
      </button>
    </form>
  );
};

export default TaskForm;
