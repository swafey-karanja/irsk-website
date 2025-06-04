import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface NewsItem {
  article_id: string;
  title: string;
  description: string;
  link: string;
  image_url: string;
  pubDate: string;
  source_name: string;
  category?: string[];
}

interface NewsState {
  items: NewsItem[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: NewsState = {
  items: [],
  status: 'idle',
  error: null,
};

const API_URL = `https://newsdata.io/api/1/latest?apikey=pub_dacd250860234d5b93d3cfe2cc2773ad&q=international%20relations%20society%20of%20kenya`;

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Failed to fetch news');
    const data = await response.json();

    return data.results as NewsItem[]; 
});

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNews.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchNews.rejected, (state, action) => {
                state.status = 'failed';  // Changed from 'loading'
                state.error = action.error.message || 'Something went wrong';
            });
    },
});

export default newsSlice.reducer;