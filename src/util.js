export const makeFirstCharCapital = (word) => {
  return word.length > 0 ? word[0].toUpperCase() + word.slice(1) : ``;
};
