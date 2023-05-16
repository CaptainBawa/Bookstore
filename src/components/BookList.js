import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const BooksList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  return (
    <div>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <div>{book.title}</div>
            <div>{book.author}</div>
            <div>{book.category}</div>
            <button type="button" onClick={() => dispatch(removeBook(book.item_id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksList;
