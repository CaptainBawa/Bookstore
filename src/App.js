import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Categories from './components/Categories';
import HomePage from './components/HomePage';
import Navigation from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
