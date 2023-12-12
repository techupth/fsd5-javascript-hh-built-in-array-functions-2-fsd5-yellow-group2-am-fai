function isPalindrome(string) {
  // Start coding here
  let originalWord = string
  let reverseWord = originalWord.split('').reverse().join('');

  if (originalWord === reverseWord){
    return true
  }else {
    return false
  }
}


//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false