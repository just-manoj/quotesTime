import { createSlice } from '@reduxjs/toolkit';

const QuotesData = createSlice({
  name: 'quotesData',
  initialState: {
    quotes: [],
  },
  reducers: {
    addQuote: (state, action) => {
      state.quotes.push(action.payload.quoteData);
    },
    setQuote: (state, action) => {
      action.payload.quotesDetails.forEach((quote) => state.quotes.push(quote));
    },
  },
});

export const addQuote = QuotesData.actions.addQuote;
export const setQuote = QuotesData.actions.setQuote;
export default QuotesData.reducer;
