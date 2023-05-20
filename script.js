function checkPasswordStrength(password) {
  var passwordStrengthBar = document.getElementById("password-strength-bar");

  // Calculate the password strength (you can use your own criteria)
  var strength = 0;
  if (password.length >= 8) strength += 1;
  if (/[a-z]/.test(password)) strength += 1;
  if (/[A-Z]/.test(password)) strength += 1;
  if (/[0-9]/.test(password)) strength += 1;

  // Update the width and color of the strength bar based on the strength level
  if (strength === 1) {
    passwordStrengthBar.style.backgroundColor = "red";
    passwordStrengthBar.style.width = "25%";
  } else if (strength === 2) {
    passwordStrengthBar.style.backgroundColor = "yellow";
    passwordStrengthBar.style.width = "50%";
  } else if (strength >= 3) {
    passwordStrengthBar.style.backgroundColor = "green";
    passwordStrengthBar.style.width = "100%";
  } else {
    passwordStrengthBar.style.backgroundColor = "#ccc";
    passwordStrengthBar.style.width = "0";
  }
  
}
