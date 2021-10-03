// Assignment code here
prompt = ("will this work")

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_";
var passwordLength = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
document.generateBtn.addEventListener("click", writePassword);
// creates passwords functions gets called in writePassword and should genreate the password
function generatePassword(){
  var length = window.promt("How many charaters do you want in your password(Must be between 8-128)");
    if (length < 8 || length > 128) 
      alert (" Please choose a number")
}
// a promt to ask if user wants uppercase, lowercase, numbers or special
if (!uppercaseChar && !lowercasChar && !numberChar && !specialChar){
      alert ("Choose 1 charater type")
      return generatePassword()
}

!generatePassword = (length , Char) => {
let password = "";
for (var i = 0; i < length; i++){
  password += charaters.Char(
    Math.floor(Math.random() * Char.length);
}
return password;
}