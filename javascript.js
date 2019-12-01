// The user will be prompted to choose from the following password criteria:

var password = "";

// Length (must be between 8 and 128 characters)

var passwordLength;
var passwordLengthNum;

// Special characters

var specialChar = "~!@#$%^&*()+=?/{}|<>:;.,[]";

// Numeric characters

var numeric = "1234567890";

// Lowercase characters

var lowerCase = "abcdefghijklmnopqrstuvwxyz";

// Uppercase characters

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Generate Button

var generateBtn = document.getElementById("generate");

// Copy Button

var copyBtn = document.getElementById("copy");

// Function on generate button press

// Clear Box

generateBtn.onclick = function clearBox() {

}

//Password Specificiations

generateBtn.onclick = function generatePW() {

    // Password Length Prompt

    passwordLength = window.prompt("How many characters in password? (8-128)");

    passwordLengthNum = Number(passwordLength);

    if (passwordLengthNum >= 8 && passwordLengthNum <= 128) {

        // Lowercase confirm
        lowerCaseConfirm = window.confirm("Would you like lowercase letters?");

        // Uppercase confirm
        upperCaseConfirm = window.confirm("Would you like uppercase letters?");

        // Number confirm
        numbericConfirm = window.confirm("Would you like numeric characters?");

        // Special character confirm
        specialCharConfirm = window.confirm("Would you like special characters?");

    } else {
        window.alert("Password length must be between 8 and 128 characters.");
        generatePW ();
    };

    // Password Generation

    for (var i = 0; i <= passwordLengthNum; i++) {
        password = password + lowerCase.charAt(Math.floor(Math.random * Math.floor(lowerCase - 1)));
    }

    // Add password to display

    document.getElementById("display").value = password;

}