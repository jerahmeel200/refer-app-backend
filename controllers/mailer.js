// Require nodemailer
import nodemailer from "nodemailer";
// Require crypto for generating verification code
// const crypto = require('crypto');

// Set up transport object with Gmail SMTP settings
const sendMail = (email, code) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "jazzkid360@gmail.com",
      pass: "nvciotnoieqfxhlj",
    },
  });

  // Generate verification code using crypto
  // const verificationCode = crypto.randomBytes(20).toString('hex');

  // Store verification code and user email in database
  // This step will depend on your database implementation

  // Send verification email to user

  const link = `http://localhost:8080/api/verify?email=${email}&code=${code}`;
  let mailOptions = {
    from: "jazzkid360@gmail.com",
    to: email,
    subject: "Verify Your Email Address",
    html: `<p>Hello,</p>
           <p>Please click on the following link to verify your email address:</p>
           <p><a href=${link}>Verify Email Address</a></p>
           <p>If you did not request this verification, please ignore this email.</p>
           <p>Thank you,<br>Your Company Name</p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  // When the user clicks on the link in the email, your server should verify the code
  // against the one stored in the database, and update the user's email address as verified
  // This step will depend on your server-side implementation
};

export default sendMail;
