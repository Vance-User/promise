const express = require("express");
const fetch = require("node-fetch");
const path = require("path");

const app = express();
const PORT = 4000;

// Middleware
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// Routes
const apiRoutes = require("./routes/apiRoutes");
app.use("/", apiRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});