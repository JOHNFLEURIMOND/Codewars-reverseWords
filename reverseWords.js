function reverseWords(str) {
  let strArr = str.split(" ");

  for (let i = 0; i < strArr.length; i++) {
    strArr[1] = reverse(strArr[1]);
    // Go for it
  }
  return strArr.join(" ";)
}

function reverse(str) {
  let newStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];

  }
  return newStr;
}

//https://github.com/JOHNFLEURIMOND     Created by @fleurimond_john