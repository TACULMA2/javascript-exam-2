export const getCommonItems = (emptyArray1, emptyArray2) => {
  const commonItems = [];

  for (const item of emptyArray1) {
    if (emptyArray2.includes(item)) {
      commonItems.push(item);
    }
  }

  return commonItems;
};

export default getCommonItems;
