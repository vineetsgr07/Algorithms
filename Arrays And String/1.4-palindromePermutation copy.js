/**
  URLify: Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palin­ drome. 
  A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.
  The palindrome does not need to be limited to just dictionary words.
 */

function isPalindromePermutation(string) {

    let stringAscciMapping = []

    for (let index = 0; index < string.length; index++) {

        if (!stringAscciMapping[string[index].charCodeAt()]) {
            stringAscciMapping[string[index].charCodeAt()] = 1
        } else {
            stringAscciMapping[string[index].charCodeAt()] = stringAscciMapping[string[index].charCodeAt()] + 1
        }
    }

    let oneCount = 0;

    if (stringAscciMapping[32]) delete stringAscciMapping[32]

    for (let index = 0; index < stringAscciMapping.length; index++) {
        if (stringAscciMapping[index] === 1) oneCount = oneCount + 1
    }

    return oneCount === 1 ? true : false;
}

console.log(isPalindromePermutation("Tact Coa".toLocaleLowerCase()));
