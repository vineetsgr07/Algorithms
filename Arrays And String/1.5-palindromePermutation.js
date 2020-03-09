/**
  One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character.
  Given two strings, write a function to check if they are one edit (or zero edits) away.
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
