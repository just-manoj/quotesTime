const dateFormat = (date) => {
  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
};

export const findDay = (date) => {
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  if (today.toDateString() === date.toDateString()) {
    return 'Today';
  } else if (yesterday.toDateString() === date.toDateString()) {
    return 'YesterDay';
  } else {
    return dateFormat(date);
  }
};

export const findTime = (date) => {
  let hour;
  if (date.getHours() > 12) {
    hour = date.getHours() - 12;
  } else if (date.getHours() === 0) {
    hour = 12;
  } else {
    hour = date.getHours();
  }
  return `${hour}:${date.getMinutes()}`;
};
