//version qui marche en local 

require('dotenv').config();
let password = process.env.PASSWORD;
let email = process.env.EMAIL;

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: password
  }
});

const mailContent = {
  from: email,
  to: email,
  subject: 'Sending Email using Node.js',
  text: 'Hello World'
};

transporter.sendMail(mailContent, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});