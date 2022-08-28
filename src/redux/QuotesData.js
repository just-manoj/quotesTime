import { createSlice } from '@reduxjs/toolkit';
import { DummyData } from '../utils/DummyData';

const QuotesData = createSlice({
  name: 'quotesData',
  initialState: {
    quotes: DummyData,
  },
  reducers: {
    addQuote: (state, action) => {
      state.quotes.push(action.payload);
    },
  },
});

export const addQuote = QuotesData.actions.addQuote;
export default QuotesData.reducer;
