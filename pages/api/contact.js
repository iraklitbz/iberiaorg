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
      from: req.body.email, // TODO: email sender
      to: 'iraklitbz@gmail.com', // TODO: email receiver
      subject: `Email recibido de ${req.body.email} desde el formulario de la web`,
      html: `<div> 
                <p>${req.body.name} pregunta lo siguiente:</p> <br/>  
                <p>${req.body.texto}</p>
              </div>  
            `
  };

  // Step 3
  transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
          return console.log('Error occurs');
      }
      return console.log('Email sent!!!');
  });
}
