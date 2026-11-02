// Q5: Movie Ticket Booking (Objects + RegExp)

const form = document.getElementById("bookingForm");

// RegExp rule and error message for each field (keys match the input ids)
const rules = {
  name: { regex: /^[A-Za-z ]+$/, message: "Name must contain only alphabets." },
  email: { regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email like example@domain.com." },
  // 1 to 10 only: either "10" or a single digit from 1 to 9
  seats: { regex: /^(10|[1-9])$/, message: "Seats must be a number from 1 to 10." },
};

// Validate one input and show a red or green border
function validateField(input) {
  const rule = rules[input.id];
  const error = document.getElementById(input.id + "Error");

  if (rule.regex.test(input.value.trim())) {
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

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let allValid = true;

  form.querySelectorAll("input").forEach((input) => {
    if (!validateField(input)) allValid = false;
  });

  if (!allValid) return;

  // Store the booking info in an object
  const booking = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    seats: Number(document.getElementById("seats").value),
  };

  // Display the ticket details
  const ticket = document.getElementById("ticket");
  ticket.style.display = "block";
  ticket.innerHTML = `
    <h2>Ticket Confirmed</h2>
    <p><strong>Name:</strong> ${booking.name}</p>
    <p><strong>Email:</strong> ${booking.email}</p>
    <p><strong>Seats:</strong> ${booking.seats}</p>
  `;
  console.log(booking);
});
