// Bot response generator for the custom chat commands
export function getBotResponse(message) {
  if (!message || message.trim() === "") {
    return "Sorry, your message is empty.";
  }

  const msg = message.trim().toLowerCase();

  // custom messages -> hi, what time is it, flip a coin, what is the date
  if (msg === "hi" || msg === "hello") {
    return "hi";
  }

  if (msg === "what time is it" || msg === "time") {
    const now = new Date();
    return `The current time is ${now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })}`;
  }

  if (msg === "flip a coin") {
    return Math.random() < 0.5 ? "You got heads" : "You got tails";
  }

  if (
    msg === "what is the date" ||
    msg === "what is todays date" ||
    msg === "what is today's date" ||
    msg === "date"
  ) {
    const now = new Date();
    return `Today is ${now.toDateString()}`;
  }

  return "I only understand hi, what time is it, flip a coin, and what is the date.";
}
