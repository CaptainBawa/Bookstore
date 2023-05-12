import React from 'react';

const BookForm = () => {
  const categories = [
    {
      value: '', label: 'Category', disabled: true, selected: true,
    },
    { value: 'Action', label: 'Action' },
    { value: 'History', label: 'History' },
    { value: 'Horror', label: 'Horror' },
    { value: 'Kids', label: 'Kids' },
    { value: 'Learning', label: 'Learning' },
    { value: 'Sci-Fi', label: 'Sci-Fi' },
  ];

  return (
    <form action="">
      <input type="text" placeholder="Title" required id="title" name="title" />
      <select name="category" id="category">
        {categories.map((category) => (
          <option
            key={category.value}
            value={category.value}
            disabled={category.disabled}
            selected={category.selected}
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
