export const makeFirstCharCapital = (word) => {
  return word.length > 0 ? word[0].toUpperCase() + word.slice(1) : ``;
};

export const getAverage = (nums) => nums.reduce((a, b) => (a + b)) / nums.length;
