var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'betheledeh668@gmail.com',
    pass: 'owup wyge cvrm bela'
  }
});

var mailOptions = {
  from: 'betheledeh668@gmail.com',
  to: 'edehogechukwunora@gmail.com',
  subject: 'Testing my task 5',
  text: 'hello there!,just trying to see if it worked......'
};
transporter.sendMail(mailOptions, function(error, data){
    if (error) {
      console.log( 'did not send',error);
    } else {
      console.log('Email sent: ',data);
    }
  });
  