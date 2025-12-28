import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const submitVolunteer = createAsyncThunk(
  'volunteer/submit',
  async (volunteerData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/volunteer', volunteerData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const volunteerSlice = createSlice({
  name: 'volunteer',
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
  reducers: {
    resetVolunteer: (state) => {
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitVolunteer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitVolunteer.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(submitVolunteer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetVolunteer } = volunteerSlice.actions;
export default volunteerSlice.reducer;

