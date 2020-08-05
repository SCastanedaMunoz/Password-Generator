// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of ASCII Codes Valid to Be Part of the Password
const passLength = 30;

// Write Password To The #password Input
function writePassword() {
  const password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Generate a Password Utilizing the Characters from the Defined Codes
function generatePassword() {
  var currentPass = [];

  for(var i = 0; i < passLength; i++) {
    // Get a ASCCI Char Code Between our Defined Range
    // Symbols, Upper, Lower, and Numbers
    var randCharCode = getRandomInt(33, 126);

    currentPass.push(String.fromCharCode(randCharCode));
  }

  return currentPass.join("");
}

// Generate a Randon Number Between the Defined Set
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// Add Event Listener to Generate Button
generateBtn.addEventListener("click", writePassword);
