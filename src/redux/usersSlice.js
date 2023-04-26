import { createSlice } from '@reduxjs/toolkit';

import { fetchUsers, changeNumberFollowers } from './operations';

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
      .addCase(fetchUsers.rejected, handleRejected)
      .addCase(changeNumberFollowers.pending, handlePending)
      .addCase(changeNumberFollowers.fulfilled, (state, { payload }) => {
        state.items = state.items.map(user => {
          if (user.id === payload.id) {
            return { ...user, followers: payload.followers };
          }
          return user;
        });
        state.error = null;
        state.isLoading = false;
      })
      .addCase(changeNumberFollowers.rejected, handleRejected),
});

export const usersReducer = usersSlice.reducer;
