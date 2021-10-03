// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_";
var passwordLength = "";
var uppercasseCheck;
var numberCheck;
var specialCheck;


// Write password to the #password input
function writePassword() {
  {
    
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
document.generateBtn.addEventListener("click", writePassword);