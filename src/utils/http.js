import axios from 'axios';

const BackEnd_URL = 'https://quotes-time-default-rtdb.firebaseio.com';
const DBName = '/QuoteDetails';
const DBFormat = '.json';

export const postQuoteDetails = async (quoteDetails) => {
  const response = await axios.post(
    BackEnd_URL + DBName + DBFormat,
    quoteDetails
  );
  const id = response.data.name;
  return id;
};

export const fetchQuoteDetails = async () => {
  const response = await axios.get(BackEnd_URL + DBName + DBFormat);
  const quotes = [];

  for (const key in response.data) {
    const quote = {
      id: key,
      name: response.data[key].name,
      quote: response.data[key].quote,
      date: response.data[key].date,
    };
    quotes.push(quote);
  }
  return quotes;
};

export const updateQuoteDetails = async (id, quoteData) => {
  await axios.put(BackEnd_URL + DBName + '/' + id + DBFormat, quoteData);
};

export const deleteQuoteDetails = async (id) => {
  await axios.delete(BackEnd_URL + DBName + '/' + id + DBFormat);
};
