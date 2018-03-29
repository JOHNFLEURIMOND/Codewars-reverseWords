function reverseWords(str) {
  let boston = str.split(' ');

  for (let i = 0; i < str.length; i++) {
    boston[1] = reverse(boston[1]);
    // Go for it
  }
  return boston.join(' ';)
}

function reverse(str) {
  let newStr = '';

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];

  }
  return newStr;
}

//https://github.com/JOHNFLEURIMOND     Created by @fleurimond_john