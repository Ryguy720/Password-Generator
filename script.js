// I defined my Variables for the pass word
let generateBtn = document.querySelector("#generate");
let upperLetter = ["A" , "B" , "C" , "D" , "E" , "F" , "G" , "H" , "I" , "J" , "K" , "L" , "M" , "N" , "O" , "P" , "Q" , "R" , "S" , "T" , "U" , "V" , "W" , "X" , "Y" , "Z" ]; 
let lowerLetter = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z" ];
let Special = ["!" , "@" , "#" , "$" , "%" , "^" , "&" ,  "*" , "(" , ")" , "_" , "+" , "=" , "-" , "?"];
let number = ["1", "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9" , "0"];

function randomPassword() {
let yourPassword = [];
let yourOptions = [];
let promptOptions = prompt("select a number between " + 8 + " and " + 128); 

if(promptOptions < 8 || promptOptions === "" || promptOptions > 128 || promptOptions === NaN){
  alert("Please Follow Directions.");
  return;
};

let findUpperletter = confirm("Would you like an Upper Case?");

let findlowerletter = confirm("Would you like a lower Case?");

let findSpecial = confirm("Would you like a Special Character?");

let findNumber = confirm("Would you like a number?");


if(!findUpperletter && !findlowerletter && !findSpecial && !findNumber) {
  alert("Please select choose an option");
  return;
}

if(findUpperletter === true){
  yourPassword.push
}


}


// Write password to the #password input
function writePassword() {
  let password = randomPassword();
  let passwordText = document.querySelector(password);

  passwordText.value = password;



// Add event listener to generate button
}

generateBtn.addEventListener("click", writePassword);
