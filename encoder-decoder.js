function encrypt(str) {
  let output = "";
  let cnt = 0;
  for (let char of str) {
    if (
      (char >= "a" && char <= "z") ||
      (char >= "A" && char <= "Z") ||
      (char >= "0" && char <= "9")
    ) {
      cnt++;
      let ascii = char.charCodeAt(0);
      ascii++;
      if (ascii === 91) ascii = 65;
      if (ascii === 123) ascii = 97;
      let outputChar = String.fromCharCode(ascii);
      output += outputChar;
    } else output += char;
  }
  if (cnt === 0) return "Please input atleast a single character";
  return output;
}

function decrypt(str) {
  let output = "";
  let cnt = 0;
  for (let char of str) {
    if (
      (char >= "a" && char <= "z") ||
      (char >= "A" && char <= "Z") ||
      (char >= "0" && char <= "9")
    ) {
      cnt++;
      let ascii = char.charCodeAt(0);
      ascii--;
      if (ascii === 64) ascii = 90;
      if (ascii === 96) ascii = 122;
      let outputChar = String.fromCharCode(ascii);
      output += outputChar;
    } else output += char;
  }
  if (cnt === 0) return "Please input atleast a single character";
  return output;
}
console.log(decrypt(""));
