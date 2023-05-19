import { useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, removeBook, removeBookApi } from '../redux/books/booksSlice';

const BooksList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
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

  const booksList = books.books.map((book, index) => ({
    ...book,
    item_id: book.item_id,
    key: `${book.item_id}-${index}`,
  }));

  return (
    <ul className="book-container">
      {booksList.map((book) => (
        <>
          <div className="Lesson-Panel">
            <li key={book.key} className="book-content">
              <div className="category">{book.category}</div>
              <div className="title">{book.title}</div>
              <div className="book">{book.author}</div>
              <Button variant="text">Comments</Button>
              <Button
                variant="text"
                type="button"
                onClick={() => {
                  dispatch(removeBook(book.item_id));
                  dispatch(removeBookApi(book.item_id));
                }}
              >
                Remove
              </Button>
              <Button variant="text">Edit</Button>
            </li>
            <div className="lesson-side">
              <li className="progress">
                <CircularProgress style={{ color: 'blue' }} />
                <div>
                  <h1>
                    80%
                    <br />
                    <span>Completed</span>
                  </h1>
                </div>
              </li>
              <hr />
              <li className="chapter">
                <p>CURRENT CHAPTER</p>
                <h5>Chapter 17</h5>
                <Button variant="contained" disableElevation>
                  UPDATE PROGRESS
                </Button>
              </li>
            </div>
          </div>
        </>
      ))}
    </ul>
  );
};

export default BooksList;
