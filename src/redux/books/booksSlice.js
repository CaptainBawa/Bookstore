import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/wNk7XH3cKH6OpVXSi7sW/books');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch books');
  }
});

export const addBookApi = createAsyncThunk('books/addBook', async (bookData) => {
  try {
    const response = await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/wNk7XH3cKH6OpVXSi7sW/books', bookData);
    return response.data;
  } catch (error) {
    throw new Error('Failed to add book');
  }
});

export const removeBookApi = createAsyncThunk('books/removeBook', async (bookId) => {
  try {
    await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/wNk7XH3cKH6OpVXSi7sW/books/${bookId}`);
    return bookId;
  } catch (error) {
    throw new Error('Failed to remove book');
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      const bookIndex = state.books.findIndex((book) => book.id === action.payload);
      if (bookIndex !== -1) {
        state.books.splice(bookIndex, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, { payload }) => {
        state.status = 'succeeded';
        state.books = Object.entries(payload)
          .flatMap(([key, value]) => value.map((book) => ({ ...book, item_id: key })));
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addBookApi.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(removeBookApi.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = state.books.filter((book) => book.item_id !== action.payload);
      })
      .addCase(removeBookApi.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
