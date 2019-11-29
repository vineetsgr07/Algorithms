/**
 * Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
 * cannot use additional data structures?
 */

function isUniqueASSCI(str) {
    let alphabet = [];
  
    for (let i = 0; i < str.length; i++) {
      if (!alphabet[str[i].charCodeAt()]) {
        alphabet[str[i].charCodeAt()] = 1;
      } else {
        alphabet[str[i].charCodeAt()] += 1;
      }
    }
  
    for (let char in alphabet) {
      if (alphabet[char] > 1 && char !== undefined) {
        return false;
      }
    }
    return true;
  }
  
  console.log(`With Ds: ${isUniqueASSCI("tes")}
  Time: O(N)
  Space Complexity: O(N)`);
  
  function isUnique(str) {
    for (let i = 0; i < str.length - 1; i++) {
      for (let j = i + 1; j < str.length; j++) {
        if (str[i] === str[j]) {
          return false;
        }
      }
    }
    return true;
  }
  
  console.log(`Without using any DS: ${isUnique("tes")}
  Time: O(N${"\u00B2"})
  Space: O(1)`);
  //Time Complexity is O(n)
  