import { createSlice } from '@reduxjs/toolkit';

const followingSlice = createSlice({
  initialState: [],
  name: 'following',
  reducers: {
    addFollowing: {
      reducer: (state, { payload }) => {
        state.push(payload);
      },
    },
    removeFollowing: {
      reducer: (state, { payload }) => {
        state.splice(state.indexOf(payload), 1);
      },
    },
  },
});

export const followingReducer = followingSlice.reducer;
export const { addFollowing, removeFollowing } = followingSlice.actions;
