// Add Express
const express = require("express");

// Initialize Express
const app = express();

// Create GET request
app.get("/", (req, res) => {
  res.send("Hier ist Hanna");
});

// Initialize server
app.listen(5001, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;
