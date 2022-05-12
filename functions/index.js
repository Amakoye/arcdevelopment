/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-spacing */
/* eslint-disable prefer-const */
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const config = functions.config();
const cors = require("cors")({ origin: true });
admin.initializeApp();

// set up a transporter
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: { user: config.user.email, pass: config.user.password },
});

let mailOptions = {
  from: "Arc Development",
};

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.sendmail = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const { name, email, phone, message } = request.query;

    mailOptions = {
      ...mailOptions,
      to: "amakoyedev@gmail.com",
      subject: "Message received!",
      html: `<p style="font-size: 16px"> From:${name}</p>`,
      html: `<p style="font-size: 16px"> Email:${email}</p>`,
      html: `<p style="font-size: 16px"> Phone Number:${phone}</p>`,
      html: `<p style="font-size: 16px"> Message:${message}</p>`,
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        response.send(error);
      } else {
        response.send("Message sent successfully");
      }
    });

    mailOptions = {
      ...mailOptions,
      to: email,
      subject: "We have received your message!",
      html: `<p style="font-size: 16px"> From:${name}</p>`,
      html: `<p style="font-size: 16px"> Email:${email}</p>`,
      html: `<p sty le="font-size: 16px"> Phone Number:${phone}</p>`,
      html: `<p style="font-size: 16px"> Message:${message}</p>`,
    };
  });
});
