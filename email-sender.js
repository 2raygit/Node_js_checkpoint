
const nodemailer = require('nodemailer');

// Créer un transporteur de mail
let transporter = nodemailer.createTransport({
  service: 'yahoo',
  auth: {
    user: 't.cheikhou@yahoo.com',  
    pass: ''    
  }
});

// Définir les options de mail
let mailOptions = {
  from: 't.cheikhou@yahoo.com',   
  to: 't.cheikhou@yahoo.com', 
  subject: 'email  Node.js',
  text: 'cetai facile!'
};

// Envoyer l'email
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
