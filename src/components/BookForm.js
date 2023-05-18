import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const generateId = () => {
  const uniqueId = Date.now().toString(36);
  return `item${uniqueId}`;
};

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formInput = {
      item_id: generateId(),
      title,
      author,
      category,
    };
    dispatch(addBook(formInput));

    setTitle('');
    setAuthor('');
    setCategory('');
  };

  const categories = [{ value: '', label: 'Category', disabled: true }, { value: 'Action', label: 'Action' }, { value: 'History', label: 'History' }, { value: 'Horror', label: 'Horror' }, { value: 'Kids', label: 'Kids' }, { value: 'Learning', label: 'Learning' }, { value: 'Sci-Fi', label: 'Sci-Fi' }];

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book Title"
        required
        value={title}
        onChange={handleTitle}
      />
      <input
        type="text"
        placeholder="Book Author"
        required
        value={author}
        onChange={handleAuthor}
      />
      <select name="category" value={category} onChange={handleCategory}>
        {categories.map((category) => (
          <option
            key={category.value}
            value={category.value}
            disabled={category.disabled}
          >
            {category.label}
          </option>
        ))}
      </select>
      <button type="submit">ADD BOOK</button>
    </form>
  );
};

export default BookForm;
