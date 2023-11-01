var usernameInput = document.getElementById("username");
var passwordInput = document.getElementById("password");
var loginButton = document.getElementById("login-button");
var errorMessage = document.getElementById("error-message");

loginButton.addEventListener("click", function () {
    var enteredUsername = usernameInput.value;
    var enteredPassword = passwordInput.value;

    if (
        enteredUsername.charAt(0) === enteredUsername.charAt(0).toUpperCase() &&
        enteredUsername.slice(1) === enteredUsername.slice(1).toLowerCase() &&
        enteredPassword === "admin"
    ) {
        localStorage.setItem("username", enteredUsername);
        window.location.href = "User Details.html";
    } else {
        errorMessage.style.display = "block"; // Show the error message
    }
});
