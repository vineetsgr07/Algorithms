/**
String Rotation:Assumeyou have a method isSubstringwhich 
checks if one word is a substringof another. Given two strings, 
sl and s2, write code to check if s2 is a rotation of sl using only one
call to isSubstring (e.g., "waterbottle" is a rotation of"erbottlewat").
 */

function isRotation(str1, str2) {
    if (str1.length !== str2.length) return "False";
  
    let str1str1 = str1 + str1;
  
    return isSubstring(str1str1, str2);
  }
  
  function isSubstring(str1, str2) {
    if (str1.includes(str2)) {
      return "True";
    } else {
      return "False";
    }
  }
  
  console.log(isRotation("waterbottle", "erbottlewat"));
  