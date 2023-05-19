import Divider from '@mui/material/Divider';
import BookForm from './BookForm';
import BooksList from './BookList';

const HomePage = () => (
  <>
    <Divider />
    <div className="main">
      <BooksList />
      <BookForm />
    </div>
  </>
);

export default HomePage;
