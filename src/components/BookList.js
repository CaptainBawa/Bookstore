import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, removeBook } from '../redux/books/booksSlice';

const BooksList = () => {
  const dispatch = useDispatch();
  const booksObject = useSelector((state) => state.books.books);
  const status = useSelector((state) => state.books.status);
  const error = useSelector((state) => state.books.error);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  const books = Object.values(booksObject).flat().map((book) => ({
    ...book,
    item_id: book.item_id,
  }));

  console.log('Array books', books);

  return (
    <div>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.item_id}>
            <div>{book.title}</div>
            <div>{book.author}</div>
            <div>{book.category}</div>
            <button type="button" onClick={() => dispatch(removeBook(book.item_id))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksList;
