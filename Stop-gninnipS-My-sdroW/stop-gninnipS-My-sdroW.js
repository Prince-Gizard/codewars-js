function spinWords(string){
  return string.replace(/\w{5,}/g,
                       function(word){return word.split('').reverse().join('')})
}
