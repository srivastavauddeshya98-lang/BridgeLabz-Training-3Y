// Q1: Personalized Login Greeting

// Store the user's name and the current hour (0-23)
const userName = "Uddeshya";
const currentHour = new Date().getHours();

let greeting;

// Pick the greeting based on the time of day
if (currentHour < 12) {
  greeting = `Good Morning ${userName}!`;
} else if (currentHour <= 17) {
  greeting = `Good Afternoon ${userName}!`;
} else {
  greeting = `Good Evening ${userName}!`;
}

console.log(greeting);
