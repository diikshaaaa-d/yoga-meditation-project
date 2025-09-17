// YogBot.js

const responses = {
  "what is yoga": "Yoga is an ancient practice that unites mind, body, and soul through physical postures, breathing, and meditation.",
  "what are benefits of yoga": "Yoga improves flexibility, strengthens muscles, boosts immunity, and reduces stress.",
  "what is meditation": "Meditation is a practice of focusing the mind to achieve clarity, calmness, and emotional balance.",
  "what are types of yoga": "Some common types are Hatha, Vinyasa, Ashtanga, Kundalini, and Yin Yoga.",
  "how often should i practice yoga": "Even 15–30 minutes daily can bring great results. Consistency is key!",
  "can beginners do yoga": "Absolutely! Start with basic poses and go at your own pace."
};

document.addEventListener("DOMContentLoaded", () => {
  const sendBtn = document.getElementById("send-btn");
  const userInput = document.getElementById("user-input");
  const chatbox = document.getElementById("chatbox");

  sendBtn.addEventListener("click", () => {
    const inputText = userInput.value.trim();
    const lowerInput = inputText.toLowerCase();

    if (!inputText) return;

    // Show user message
    chatbox.innerHTML += `<div><strong>You:</strong> ${inputText}</div>`;

    // Bot response
    const reply = responses[lowerInput] || "Sorry, I’m still learning. Try asking something else!";
    chatbox.innerHTML += `<div><strong>YogBot:</strong> ${reply}</div>`;

    userInput.value = "";
    chatbox.scrollTop = chatbox.scrollHeight;
  });
});
