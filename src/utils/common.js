export const debounce = (cb, delay) => {
  let timeOutId = null;
  return function (...args) {
    if (timeOutId) {
      clearTimeout(timeOutId);
    }
    timeOutId = setTimeout(() => cb(...args), delay);
  };
};
