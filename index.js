// Add Express
const express = require("express");
const { sendMail } = require("./email/civan_portfolio");

// Initialize Express
const app = express();

app.use(express.json());

// Create GET request
app.get("/", (req, res) => {
  res.send("Hier ist Hanna");
});

app.get("/markus", (req, res) => {
  res.send("geiler typ");
});

app.post("/sendmail", async (req, res) => {
  console.log(req.body);
  try {
    /*  if (!req.body) {
      return res.status(400).send({
        message: "Fields can not be empty",
      });
    } */
    const mailData = req.body;
    await sendMail(mailData);
    return res.status(200).send({ message: "blub" });
  } catch (error) {
    return res.status(500).send({
      message:
        error.message || "Some error occurred while creating the listing.",
    });
  }
});

// Initialize server
app.listen(5001, () => {
  console.log("Running on port 5001.");
});

// Export the Express API
module.exports = app;
