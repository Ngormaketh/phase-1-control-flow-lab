// Function to return a greeting based on the distance
function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return "This one is on me!";
  } else if (distance > 400 && distance <= 2000) {
    return "That will be twenty bucks.";
  } else if (distance > 2000 && distance <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

// Function to check the city using a ternary operator
function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

// Function to return a message based on the tip
function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
{
  "presets": ["env"]
}
