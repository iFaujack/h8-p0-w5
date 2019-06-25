function changeVocals(str) {
  //code di sini
  str = str.split("")
  var vocalWords = ["a", "i", "u", "e", "o", "A", "I", "U", "E", "O"]
  for (var i = 0; i < str.length; i++) {
    if (vocalWords.indexOf(str[i]) != -1) {
      var newWord = str[i].charCodeAt(0) + 1;
      str[i] = String.fromCharCode(newWord);
    }
  }
  str = str.join("")
  return str;
}

function reverseWord(str) {
  //code di sini
  str = str.split("").reverse().join("")
  return str;
}

function setLowerUpperCase(str) {
  //code di sini
  str = str.split("")
  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      str[i] = str[i].toUpperCase();
    } else {
      str[i] = str[i].toLowerCase();
    }
  }
  str = str.join("")
  return str;
}

function removeSpaces(str) {
  //code di sini
  str = str.split("");
  var indexSpace = str.indexOf(" ");

  if (indexSpace != -1) {
    str.splice(indexSpace, 1);
    str = str.join("")
    return removeSpaces(str);
  }

  str = str.join("")
  return str;
}

function passwordGenerator(name) {
  //code di sini

  if (name.length < 5) {
    return "Minimal karakter yang diinputkan adalah 5 karakter"
  }
  var change1 = changeVocals(name)
  var change2 = reverseWord(change1)
  var change3 = setLowerUpperCase(change2)
  var change4 = removeSpaces(change3)
  return change4;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudip utra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'