// I defined my Variables for the pass word
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var specialChar = "!@#$%^&*()_+=-`?"
var number = "1234567890"

//I created Functions for create the password
function getLowercase() {
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}

function getUppercase() {
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}

function getNumber() {
  return number[Math.floor(Math.random() * number.length)];
}

function getSymbol() {
  return specialChar[Math.floor(Math.random() * specialChar.length)];
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector(password);

  passwordText.value = password;



// Add event listener to generate button
}

generateBtn.addEventListener("click", writePassword);
