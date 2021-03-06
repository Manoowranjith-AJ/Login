const sendGrid = (email) => {
  const otp = require("./otp");
  const sgMail = require("@sendgrid/mail");
  var pwd = String(otp.otp());
  var content = `<h1>Your verification code:${pwd}`;
  const API_KEY =
  process.env.MAIL_KEY;
  sgMail.setApiKey(API_KEY);

  const message = {
    to: email,
    from: process.env.MAIL,
    subject: "One Time Password",
    text: pwd,
    html: content,
  };

  sgMail
    .send(message)
    .then((response) => console.log("Email sent..."))
    .catch((error) => console.log(error.message));

  return pwd;
};
module.exports = { sendGrid };
