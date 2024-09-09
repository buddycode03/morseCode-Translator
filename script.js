const morseCode = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  "&": ".-...",
  "'": ".----.",
  "@": ".--.-.",
  ")": "-.--.-",
  "(": "-.--.",
  ":": "---...",
  ",": "--..--",
  "=": "-...-",
  "!": "-.-.--",
  ".": ".-.-.-",
  "-": "-....-",
  "%": "-----",
  "+": ".-.-.",
  "?": "..--..",
  "/": "-..-.",
  '"': ".-..-.",
  " ": "/",
  _: "..--.-",
  $: "...-..-"
};

const reverseMorseCode = {};
for (const key in morseCode) {
  if (morseCode.hasOwnProperty(key)) {
    const value = morseCode[key];
    reverseMorseCode[value] = key;
  }
}

const inputField = document.getElementById("input");
const translateButton = document.getElementById("translate");
const outputField = document.getElementById("output");

translateButton.addEventListener("click", () => {
  const inputText = inputField.value.trim().toUpperCase();

  if (inputText === "") {
    outputField.textContent = "No input provided";
    return;
  }

  // Check if the input contains Morse code characters
  if (/[.-]/.test(inputText)) {
    // Morse code to alphabetic conversion
    const morseWords = inputText.split(" / "); // Split Morse words by '/'
    const translatedWords = morseWords.map(morseWord => {
      const morseChars = morseWord.split(" "); // Split individual Morse characters
      return morseChars
        .map(morseChar => reverseMorseCode[morseChar] || morseChar) // Translate each char
        .join(""); // Join to form words
    });
    outputField.textContent = translatedWords.join(" "); // Join words with space
  } else {
    // Alphabetic to Morse code conversion
    const words = inputText.split(" "); // Split words by space
    const translatedWords = words.map(word => {
      const chars = word.split(""); // Split into individual characters
      const morseChars = chars.map(char => morseCode[char] || char); // Translate to Morse
      return morseChars.join(" "); // Join characters with space between Morse symbols
    });
    outputField.textContent = translatedWords.join(" / "); // Join words with ' / ' between words
  }
});
