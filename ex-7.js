function isPalindrome(string) {
  // Start coding here
  const cleanString = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return cleanString === cleanString.split("").reverse().join("");
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
