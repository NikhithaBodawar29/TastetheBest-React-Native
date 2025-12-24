import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Post {
  id: number;
  title: string;
}

interface PostsState {
  data: Post[];
  loading: boolean;
}

const initialState: PostsState = {
  data: [],
  loading: false,
};

// API CALL WITH PAGINATION
export const fetchPosts = createAsyncThunk(
  'posts/fetch',
  async (page: number) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
    );
    const result = await response.json();
    return result;
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    loadStoredData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, state => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [...state.data, ...action.payload];
        AsyncStorage.setItem('posts', JSON.stringify(state.data));
      })
      .addCase(fetchPosts.rejected, state => {
        state.loading = false;
      });
  },
});

export const { loadStoredData } = postsSlice.actions;
export default postsSlice.reducer;
