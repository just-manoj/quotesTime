import { createSlice } from '@reduxjs/toolkit';
import { DummyData } from '../utils/DummyData';

const QuotesData = createSlice({
  name: 'quotesData',
  initialState: {
    quotes: DummyData,
  },
  reducers: {
    addQuote: (state, action) => {
      console.log(action.payload);
      state.quotes.push(action.payload.quoteData);
    },
  },
});

export const addQuote = QuotesData.actions.addQuote;
export default QuotesData.reducer;
