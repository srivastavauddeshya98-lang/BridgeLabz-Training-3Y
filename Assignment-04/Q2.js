// Q2: Student Form Validator using RegExp

const form = document.getElementById("studentForm");

// One RegExp and one error message per field (keys match the input ids)
const rules = {
  name: { regex: /^[A-Za-z ]+$/, message: "Name must contain only alphabets." },
  email: { regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email like example@domain.com." },
  phone: { regex: /^\d{10}$/, message: "Phone must be exactly 10 digits." },
  password: {
    // Lookaheads: 1 uppercase, 1 digit, 1 special character
    regex: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
    message: "Password needs 1 uppercase letter, 1 number and 1 special character.",
  },
};

// Validate one input and show a red or green border
function validateField(input) {
  const rule = rules[input.id];
  const error = document.getElementById(input.id + "Error");

  if (rule.regex.test(input.value)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
    error.textContent = "";
    return true;
  }
  input.classList.remove("valid");
  input.classList.add("invalid");
  error.textContent = rule.message;
  return false;
}

// Live validation while typing
form.querySelectorAll("input").forEach((input) => {
  input.addEventListener("input", () => validateField(input));
});

// Validate everything on submit
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let allValid = true;

  form.querySelectorAll("input").forEach((input) => {
    if (!validateField(input)) allValid = false;
  });

  document.getElementById("result").textContent = allValid
    ? "Registration successful!"
    : "Please fix the errors above.";
});
