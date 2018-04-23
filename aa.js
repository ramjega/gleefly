var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: 'sriramjegatheesan1@gmail.com',
        pass: 'srisriram'
    }
});
const mailOptions = {
  from: 'sriramjegatheesan1@gmail.com', // sender address
  to: 'sriramram1995@gmail.com', // list of receivers
  subject: 'Gleefly order', // Subject line
  html: '<p>Hi Gleefly team, you got a car order. please visit and check in your dashboard</p>'// plain text body
};
transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
});
