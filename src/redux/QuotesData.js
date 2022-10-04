import { createSlice } from '@reduxjs/toolkit';

const QuotesData = createSlice({
  name: 'quotesData',
  initialState: {
    quotes: [],
  },
  reducers: {
    addQuote: (state, action) => {
      state.quotes.splice(0, 0, action.payload.quoteData);
    },
    setQuote: (state, action) => {
      action.payload.quotesDetails
        .sort((a, b) => {
          const c = new Date(a.date);
          const d = new Date(b.date);
          return d - c;
        })
        .forEach((quote) => state.quotes.push(quote));
    },
    updateQuote: (state, action) => {
      const index = state.quotes.findIndex(
        (quote) => quote.id == action.payload.quoteData.id
      );
      const updatableQuote = state.quotes[index];
      const quoteItem = { ...updatableQuote, ...action.payload.quoteData };
      // state.quotes[index] = quoteItem;
      state.quotes.splice(index, 1);
      state.quotes.splice(0, 0, quoteItem);
    },
    deleteQuote: (state, action) => {
      const index = state.quotes.findIndex(
        (quote) => quote.id == action.payload.id
      );
      state.quotes.splice(index, 1);
    },
  },
});

export const addQuote = QuotesData.actions.addQuote;
export const setQuote = QuotesData.actions.setQuote;
export const updateQuote = QuotesData.actions.updateQuote;
export const deleteQuote = QuotesData.actions.deleteQuote;
export default QuotesData.reducer;
