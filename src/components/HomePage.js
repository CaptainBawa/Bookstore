import Divider from '@mui/material/Divider';
import BookForm from './BookForm';
import BooksList from './BookList';

const HomePage = () => (
  <>
    <Divider style={{ height: '0' }} />
    <div className="main">
      <BooksList />
      <BookForm />
    </div>
  </>
);

export default HomePage;
