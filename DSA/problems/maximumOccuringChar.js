let testingString = "testing string";

const getMaxOccuredCharacter = (str) => {
  let charCountData = {};
  let charFreq = 1;
  let maxChar = null;

  // if empty string return from here ;
  if (str === "") {
    return "please provide proper string.";
  }

  // if string contains single character then return here;
  if (str.length == 1) {
    return str;
  }

  for (char of str) {
    // Skip spaces if necessary
    if (char === " ") continue;

    if (charCountData[char]) {
      charCountData[char]++;
    } else {
      charCountData[char] = 1;
    }
  }

  for (char in charCountData) {
    if (charCountData[char] > charFreq) {
      charFreq = charCountData[char];
      maxChar = char;
    }
  }

  return maxChar ? maxChar : "All charcters occured evenly";
};

console.log(
  "maximum occcured Character",
  getMaxOccuredCharacter(testingString.toLowerCase())
);
