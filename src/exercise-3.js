export const getNumberType = (number) => {
if (number <= 0){
  return null;
}
  else if (number%2==0){
  return 'even number';
}
else if (number%2==1){
  return 'odd number';
}else {
  return null;
}
};

export default getNumberType;
