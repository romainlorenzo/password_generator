// Assignment code here
// create variables to hold the character options for Special, Lowercase, Uppercase, and Numeric Charcter.

// create an empty array that will hold the users selected characters.
// var possibleChars = []
// var passWord Array = []

//o game start prompt for users of charcter and hold in a variable
// var numChars = prompt("How many charchters would you like in your password")

// check the users and confirm they put in a number between 8 and 128, and it is numeric.

// write funcrion that validates users input

// function validateUserInput(chars) {
  // parseInt(chars)
// if ( chars < 8 || chars > 128) {
// return null
//}
//}

// after validation vreate variables for charcter selections.

// var specialNums = confirm("Would you like special characters")
// var numericallNums = confirm("Would you like special characters")
// var lowerChars = confirm("Would you like special characters")
// var upperChars = confirm("Would you like special characters")

// validate that at least one option was selected

// if (!specialChars && !numericalNums && !lowerChars && !upperChars) {
//  alert ("You need to select at least one type of character");
// return generatePassword()
//}

//after validation is complete, start pushing the selected charcters into possible chars arays

// if (specialChars) {
  // possiblChars.concat(specialCharsArray)
  // }
 // if (numericalNums ) {
    // possibleChars.concat(numericalNumsArray)
//}
//create a random number 

// loop  through possibleChars and select a random character from the possibleCharsArray from based on how many charcters they entered into the prompt.

// push() the randomly generated charcter to an empty aray called PasswordArray

// return passwordArray.join()

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
