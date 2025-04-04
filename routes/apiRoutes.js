const express = require("express");
const router = express.Router();



async function getRandomGreeting() {
  const greetings = ["Hello!", "Welcome!", "Have a great day!", "Stay positive!", "Enjoy your day!"];
  return greetings[Math.floor(Math.random() * greetings.length)];
}

router.get("/", async (req, res) => {
  res.render("index", {
    title: "Home",
    greeting: await getRandomGreeting(),
  });   
});

module.exports = router;