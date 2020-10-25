const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  // write your solution here
  const initialArr = expr.match(/.{1,10}/g);
  space = "**********";

  const cleanArr = initialArr.map((letter) =>
    letter
      .replace(space, " ")
      .replace(/10/g, ".")
      .replace(/11/g, "-")
      .replace(/00/g, "")
  );
  console.log(cleanArr);

  const resultArr = cleanArr.map((letter) => {
    if (letter === " ") {
      return " ";
    }
    for (const key in MORSE_TABLE) {
      if (MORSE_TABLE.hasOwnProperty(key)) {
        if (letter === key) {
          console.log(MORSE_TABLE[key]);
          return MORSE_TABLE[key];
        }
      }
    }
  });

  const resultStr = resultArr.join("");

  return resultStr;
}

module.exports = {
  decode,
};
