const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "smtp.strato.de",
  port: 465,
  tls: {
    ciphers: "SSLv3",
    rejectUnauthorized: false,
  },
  auth: {
    user: "info@civan-erbay.de",
    pass: process.env.EMAIL_PW,
  },
});

async function sendMail(sendObject) {
  console.log(sendObject);
  const info = await transporter.sendMail({
    from: "info@civan-erbay.de",
    to: '"Civan Erbay" <info@civan-erbay.de>',
    subject: sendObject.subject,
    text: "Absender: " + sendObject.sender + ' Inhalt: ' + sendObject.text,
  });

  console.log("Message sent: %s", info.messageId);
}

//sendMail().catch(console.error);

module.exports = {
  sendMail,
};
