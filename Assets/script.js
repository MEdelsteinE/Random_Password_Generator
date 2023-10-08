var generateBtn = document.querySelector("#generate");

var UCL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LCL = 'abcdefghijklmnopqrstuvwxyz';
var Nums = '0123456789';
var Specials = '!@#$%^&*()-_+=<>?';

var allCharacters = '';
var complete = '';

var RequiresUCL = confirm('If you want uppercase letters please click ok');
var RequiresLCL = confirm('If you want lowercase letters please click ok');
var RequiresNums = confirm('If you want numbers please click ok');
var RequiresSpecials = confirm('If you want special characters please click ok');

var totalchars = prompt('Please enter how many characters you would like your password to be');

if (RequiresUCL) {
  allCharacters += UCL;
}

if (RequiresLCL) {
  allCharacters += LCL;
}

if (RequiresNums) {
  allCharacters += Nums;
}

if (RequiresSpecials) {
  allCharacters += Specials;
}

if (totalchars < 8) {
  alert('Please enter a number higher than 8');
  totalchars = prompt('Please enter how many characters you would like your password to be')
}

if (totalchars > 128) {
  alert('Please enter a number less than 128')
  totalchars = prompt('Please enter how many characters you would like your password to be');
}

if (isNaN(totalchars)) {
  alert('You must enter a number')
  totalchars = prompt('Please enter how long you would like your password');
}

for (var characters = 0; characters < totalchars; characters++) {
  var random = Math.random();
  var index = Math.floor(random * allCharacters.length);

  complete += allCharacters[index]
}
console.log(complete);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = complete;

}

generateBtn.addEventListener("click", writePassword);
function generatePassword() {
  alert('Here is your password')
}
