const express = require("express");
const router = express.Router();

async function getRandomGreeting() {
  const greetings = ["Hello!", "Welcome!", "Have a great day!", "Stay positive!", "Enjoy your day!"];
  return greetings[Math.floor(Math.random() * greetings.length)];
}

// Render page with initial greeting
router.get("/", async (req, res) => {
  res.render("index", {
    title: "Home",
    greeting: await getRandomGreeting(),
  });   
});

// API endpoint to get a new random greeting
router.get("/api/greeting", async (req, res) => {
  const greeting = await getRandomGreeting();
  res.json({ greeting });
});

module.exports = router;
