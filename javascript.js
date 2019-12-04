// Variables

var password = "";
var passwordLength;
var lowerCaseConfirm;
var upperCaseConfirm;
var numericConfirm;
var specialCharConfirm;
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

// Arrays 

var passwordArr = [];
var specialChar = ["~","!","@","#","$","%","^","&","*","(",")","+","=","?","/","{","}","|","<",">",":",";",".",",","[","]"];
var numeric = [1,2,3,4,5,6,7,8,9,0];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// Functions

// Password Length

function pwLength() {
    passwordLength = window.prompt("How many characters in password? (8-128)");
    passwordLength = Number(passwordLength);
    if (passwordLength >= 8 && passwordLength <= 128) {
        console.log(passwordLength);
        return;
    } else {
        window.alert("Password length must be between 8 and 128 characters.");
        pwLength();
    };
}

// Lowercase Letters

function lowLetters() {
    lowerCaseConfirm = window.confirm("Would you like lowercase letters?");
    console.log(lowerCaseConfirm);
    return;
}

// Uppercase Letters

function upLetters() {
    upperCaseConfirm = window.confirm("Would you like uppercase letters?");
    console.log(upperCaseConfirm);
    return;
}

// Numbers

function numCharacters() {
    numericConfirm = window.confirm("Would you like numeric characters?");
    console.log(numericConfirm);
    return;
}

// Special Characters

function specCharacters() {
    specialCharConfirm = window.confirm("Would you like special characters?");
    console.log(specialCharConfirm);
    return;
}

// Character Specification 

function charSpec() {
    lowLetters();
    upLetters();
    numCharacters();
    specCharacters();
}

// Password Array Creation

function passArrGen() {
    if (lowerCaseConfirm === true) {
        passwordArr = passwordArr.concat(lowerCase);
        console.log(passwordArr);
    }
    if (upperCaseConfirm === true) {
        passwordArr = passwordArr.concat(upperCase);
        console.log(passwordArr);
    }
    if (numericConfirm === true) {
        passwordArr = passwordArr.concat(numeric);
        console.log(passwordArr);
    }
    if (specialCharConfirm === true) {
        passwordArr = passwordArr.concat(specialChar);
    }
    return;
}

// Pasword Generation

function generatePW() {
    password = "";
    for (var i = 0; i <= passwordLength - 1; i++) {
        password = password + passwordArr[Math.floor(Math.random() * Math.floor(passwordArr.length - 1))];
        console.log(password);
        displayPassword();
}};

// Check atleast one character type is selected

function checkChar() {
    if (lowerCaseConfirm === false && upperCaseConfirm === false && numericConfirm === false && specialCharConfirm === false) {
        window.alert("Password must contain atleast one character type.");
        charSpec();
    } else {
        passArrGen();
        generatePW();
    }
}

// Add Password to Display

function displayPassword() {
    document.querySelector("#display").textContent = password;
}

// Copy to Clipboard

function copyPassword() {
    document.getElementById("display").select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}

// Call Functions

generateBtn.addEventListener("click", function clickGenBtn() {
    pwLength();
    charSpec();
    checkChar();
});

copyBtn.addEventListener("click", copyPassword);  