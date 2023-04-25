import { createSlice } from '@reduxjs/toolkit';

import { fetchUsers, addContact, deleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchUsers.pending, handlePending)
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchUsers.rejected, handleRejected),
  // .addCase(addContact.pending, handlePending)
  // .addCase(addContact.fulfilled, (state, action) => {
  //   state.isLoading = false;
  //   state.error = null;
  //   state.items.push(action.payload);
  // })
  // .addCase(addContact.rejected, handleRejected)
  // .addCase(deleteContact.pending, handlePending)
  // .addCase(deleteContact.fulfilled, (state, action) => {
  //   state.isLoading = false;
  //   state.error = null;
  //   const index = state.items.findIndex(
  //     contact => contact.id === action.payload.id
  //   );
  //   state.items.splice(index, 1);
  // })
  // .addCase(deleteContact.rejected, handleRejected),
});

export const usersReducer = usersSlice.reducer;
