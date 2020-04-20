// use Gmail account to send an email.
// Project Status: FAIL.

var nodemailer = require ('nodemailer');

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'email@gmail.com',
		pass: 'password'
	}
});

var mailOption = {
	from: 'email@gmail.com',
	to: 'email@gmail.com',
	subject: 'Sending Email using Node.js',
	text: 'This is a demo.'
};

transporter.sendMail(mailOption, function (error, info) {
	if (error) {
		console.log(error);
	}
	else{
		console.log('Email sent: ' + info.response);
	}
});