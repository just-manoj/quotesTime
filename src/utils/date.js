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
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
};
