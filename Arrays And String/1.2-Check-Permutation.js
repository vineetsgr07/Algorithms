/**
 * Check Permutation: Given two strings, write a method to decide if one is a permutation of the
 * other.
 */

function checkPermutation(str1, str2) {
    let arrayLength = new Array(256).fill(0);
    let arrayLength2 = new Array(256).fill(0);

    for (let i = 0; i < str1.length; i++) {
        if (arrayLength[str1[i].charCodeAt()] === undefined) {
            arrayLength[str1[i].charCodeAt()] = 1;
        } else {
            arrayLength[str1[i].charCodeAt()] += 1;
        }
    }

    for (let i = 0; i < str2.length; i++) {
        if (arrayLength2[str2[i].charCodeAt()] === undefined) {
            arrayLength2[str2[i].charCodeAt()] = 1;
        } else {
            arrayLength2[str2[i].charCodeAt()] += 1;
        }
    }

    for (let i = 0; i < 256; i++) {
        if (arrayLength[i] !== arrayLength2[i]) {
            return "False";
        }
    }

    return "True";
}

console.log(`permutation of other : ${checkPermutation("test1", "te1st")}
  Time: O(N)
  Space: O(1)`);
