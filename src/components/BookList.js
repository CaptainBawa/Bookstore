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

  const buttonStyle = {
    fontFamily: 'RobotoSlab',
    fontSize: '0.875rem',
    fontWeight: '300',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#4386bf',
    paddingLeft: '0',
  };

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
              <Button variant="text" style={buttonStyle}>Comments</Button>
              <Button
                variant="text"
                style={buttonStyle}
                type="button"
                onClick={() => {
                  dispatch(removeBook(book.item_id));
                  dispatch(removeBookApi(book.item_id));
                }}
              >
                Remove
              </Button>
              <Button variant="text" style={buttonStyle}>Edit</Button>
            </li>
            <div className="lesson-side">
              <li className="progress">
                <CircularProgress variant="determinate" value={75} style={{ color: '#379cf6', width: '4.25rem', height: '4.25rem' }} />
                <div>
                  <h1>
                    75%
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
