// Add an event listener to the login form that triggers on form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    // Retrieve input values
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    // Get references to error message elements
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    // Clear any previous error messages
    emailError.textContent = "";
    passwordError.textContent = "";


    let valid = true; // Flag to track form validity

    // Regular expression for password validation:
    // - At least 8 characters
    // - At least one letter
    // - At least one number
    // - At least one special character
    let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Validate email format (must contain "@")
    if (!email.includes("@")) {
        emailError.textContent = "Please enter a valid email address.";
        valid = false;
    }

    // Validate password using the regex pattern
    if (!passwordRegex.test(password)) {
        passwordError.textContent = "Password must contain at least 8 characters, a number, a special character, and a letter.";
        valid = false;
    }

    // If all inputs are valid, show a success message
    if (valid) {
        alert("LogIn successful!");
    }
});

// Add an event listener for the password visibility toggle button
document.getElementById("togglePassword").addEventListener("click", function() {
    let passwordInput = document.getElementById("password");
    // Toggle password visibility between text and password
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        this.textContent = "😌"; // Change icon to indicate hiding
    } else {
        passwordInput.type = "password";
        this.textContent = "👁"; // Change icon to indicate showing
    }
});

