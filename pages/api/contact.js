export default function (req, res) {
  require('dotenv').config();
  const nodemailer = require('nodemailer');
  // Step 1
  let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'iraklitbz@gmail.com',
          pass: process.env.password
      }
  });

  // Step 2
  let mailOptions = {
      from: 'abc@gmail.com', // TODO: email sender
      to: 'cba@gmail.com', // TODO: email receiver
      subject: 'Nodemailer - Test',
      text: req.body.name
  };

  // Step 3
  transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
          return console.log('Error occurs');
      }
      return console.log('Email sent!!!');
  });
}
