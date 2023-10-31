var usernameInput = document.getElementById("username");
var passwordInput = document.getElementById("password");
var loginButton = document.getElementById("login-button");
var errorMessage = document.getElementById("error-message");

loginButton.addEventListener("click", function () {
    var enteredUsername = usernameInput.value;
    var enteredPassword = passwordInput.value;

    if (enteredUsername === "admin" && enteredPassword === "admin") {
        window.location.href = "table.html";
    } else {
        errorMessage.style.display = "block"; // Show the error message
    }
});

