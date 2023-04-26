import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6431abb13adb15965171c489.mockapi.io';

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/users');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeNumberFollowers = createAsyncThunk(
  'users/changeNumberFollowers',
  async ({ id, followers }, thunkAPI) => {
    try {
      const response = await axios.put(`/users/${id}`, { followers });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
