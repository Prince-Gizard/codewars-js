function generateHashtag(str) {
  if (str.trim() === '') return false;

  const strCamelCase = str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

  const strWithHashtag = `#${strCamelCase.trim()}`;

  return strWithHashtag.length > 140 ? false : strWithHashtag;
}
