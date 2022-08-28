import { configureStore } from '@reduxjs/toolkit';

import QuotesData from './QuotesData';

export const store = configureStore({
  reducer: {
    quotesData: QuotesData,
  },
});
