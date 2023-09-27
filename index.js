// Add Express
const express = require("express");
const { sendMail } = require("./email/civan_portfolio");
const cors = require("cors");

// Initialize Express
const app = express();
/* app.use(cors()); */
app.use(cors({ origin: ["https://www.civan-erbay.de"] }));
app.use(express.json());

// Create GET request
app.get("/", (req, res) => {
  res.send("Hier ist Hanna");
});

app.post("/sendmail", cors(), async (req, res) => {
  console.log(req.body);
  try {
    if (!req.body) {
      return res.status(400).send({
        message: "Fields can not be empty",
      });
    }
    const mailData = req.body;
    await sendMail(mailData);
    return res.status(200).send({ message: "success" });
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
