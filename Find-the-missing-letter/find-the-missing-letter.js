const findMissingLetter = (array) => {
  const index = array
    .slice(1) 
    .findIndex((c, i) => c.charCodeAt() - array[i].charCodeAt() > 1); 
    
  return index > -1 ? 
    String.fromCharCode(array[index].charCodeAt() + 1)
    : 
    null; 
};
