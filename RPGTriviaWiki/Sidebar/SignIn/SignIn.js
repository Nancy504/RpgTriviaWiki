document.getElementById("signinForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get form field values
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("ConfirmPassword").value;
     // Get error message elements
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let confirmPasswordError = document.getElementById("confirmPasswordError");

     // Clear previous error messages
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    let valid = true; // Flag to track form validity
     // Regular expression to validate password complexity
    let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Validate email format
    if (!email.includes("@")) {
        emailError.textContent = "Please enter a valid email address.";
        valid = false;
    }
     // Validate password format
    if (!passwordRegex.test(password)) {
        passwordError.textContent = "Password must contain at least 8 characters, a number, a special character, and a letter.";
        valid = false;
    }
     // Check if password and confirm password match
    if (confirmPassword !== password) {
        confirmPasswordError.textContent = "Passwords does not match!";
        valid = false;
    }
     // If all validations pass, display success message
    if (valid) {
        alert("Sign-in successful!");
    }
});

// Toggle password visibility for the main password field
document.getElementById("togglePassword").addEventListener("click", function() {
    let passwordInput = document.getElementById("password");
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
    this.textContent = passwordInput.type === "password" ? "👁" : "😌";
});
// Toggle password visibility for the confirm password field
document.getElementById("togglerePassword").addEventListener("click", function() {
    let passwordInput = document.getElementById("ConfirmPassword");
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
    this.textContent = passwordInput.type === "password" ? "👁" : "😌";
});
