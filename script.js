// I defined my Variables or Options for the user password
let generateBtn = document.querySelector("#generate");
let upperLetter = ["A" , "B" , "C" , "D" , "E" , "F" , "G" , "H" , "I" , "J" , "K" , "L" , "M" , "N" , "O" , "P" , "Q" , "R" , "S" , "T" , "U" , "V" , "W" , "X" , "Y" , "Z" ]; 
let lowerLetter = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z" ];
let Special = ["!" , "@" , "#" , "$" , "%" , "^" , "&" ,  "*" , "(" , ")" , "_" , "+" , "=" , "-" , "?"];
let number = ["1", "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9" , "0"];

// function is where i will push my elements to create the password
function randomPassword() {
let yourPassword = [""];
let yourOptions = [""];
let promptOptions = prompt("select a number between " + 8 + " and " + 128); 

// Prompts user to select the number of elements in the password
if(promptOptions < 8 || promptOptions === "" || promptOptions > 128 || promptOptions === NaN){
  alert("Please Follow Directions.");
  return;
};

// asking the user to select from the options
let findUpperletter = confirm("Would you like an Upper Case?");

let findlowerletter = confirm("Would you like a lower Case?");

let findSpecial = confirm("Would you like a Special Character?");

let findNumber = confirm("Would you like a number?");


if(!findUpperletter && !findlowerletter && !findSpecial && !findNumber) {
  alert("Please select choose an option");
  return;
}

function randomOptions(array){
  let randomChoice = array[Math.floor(Math.random() * array.length)];
  return randomChoice;
}

// If statements selects random elements from the options arrays using the concat we can combine

if(findUpperletter === true){
  yourPassword.push(randomOptions(upperLetter));
  yourOptions = yourOptions.concat(upperLetter);
};

if(findlowerletter === true){
  yourPassword.push(randomOptions(lowerLetter));
  yourOptions = yourOptions.concat(lowerLetter);
};

if(findSpecial === true){
  yourPassword.push(randomOptions(Special));
  yourOptions = yourOptions.concat(Special);
};

if(findNumber === true){
  yourPassword.push(randomOptions(number));
  yourOptions = yourOptions.concat(number);
};

let passwordLength = promptOptions-yourPassword.length;

for (let i = 0; i < passwordLength; i++){
  yourPassword.push(randomOptions(yourOptions))
}
return yourPassword.join("")

}


// Write password to the #password input
function writePassword() {
  let password = randomPassword();
  let passwordText = document.querySelector("#password"); // I had .password here for some unknown reason

  passwordText.value = password; //Thowing and error but i dont know why



// Add event listener to generate button
}

generateBtn.addEventListener("click", writePassword);
