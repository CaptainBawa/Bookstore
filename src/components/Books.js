import BooksList from './BookList';

const Book = () => {
  const books = [
    { id: 1, title: 'The Hunger Games', category: 'Action' },
    { id: 2, title: 'Sapiens: A Brief History of Humankind', category: 'History' },
    { id: 3, title: 'It', category: 'Horror' },
  ];
  return (
    <div>
      <BooksList books={books} />
    </div>
  );
};

export default Book;
