export const getTheExactNumber = (numbers) => {
  let emptyArray = null;

  for (const number of numbers) {
    if (number % 3 === 0) {
      if (emptyArray === null || number > emptyArray) {
        emptyArray = number;
      }
    }
  }

  return emptyArray;
};


export default getTheExactNumber;