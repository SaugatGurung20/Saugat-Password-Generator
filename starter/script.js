// Array of special characters to be included in password
const specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

function getPasswordOptions() {
  passwordLength = parseInt(prompt("How long do you want your password length to be?"));
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert('Please enter a valid password length between 8 to 128');
    return;
  }

  includeSpecial = confirm('Do you want to include special characters?');
  includeNumeric = confirm('Do you want to include numeric characters?');
  includeLowercase = confirm('Do you want to include lowercase characters?');
  includeUppercase = confirm('Do you want to include uppercase characters?');

  if (!includeSpecial && !includeNumeric && !includeLowercase && !includeUppercase) {
    alert('You must choose at least one character set!');
    return;
  }
}

function generatePassword() {
  getPasswordOptions();

  let allCharacters = [];
  if (includeSpecial) allCharacters = allCharacters.concat(specialCharacters);
  if (includeNumeric) allCharacters = allCharacters.concat(numericCharacters);
  if (includeLowercase) allCharacters = allCharacters.concat(lowerCasedCharacters);
  if (includeUppercase) allCharacters = allCharacters.concat(upperCasedCharacters);

  let generatedPassword = '';
  for (let i = 0; i < passwordLength ; i++) {
      let randomIndex = Math.floor(Math.random() * allCharacters.length);
      generatedPassword += allCharacters[randomIndex];
  }
  return generatedPassword;
}


// Get references to the #generate element
const generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);