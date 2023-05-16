import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    updateStatus: (state) => {
      return 'Under construction';
    },
  },
});

export const { updateStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
