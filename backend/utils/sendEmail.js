const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    service: 'gmail',
    auth: {
      user: 'shivammtripathibusiness@gmail.com',
      pass: 'sdzaerlbgbfkagcm',
    },
  });

  const mailOptions = {
    from: 'shivammtripathibusiness@gmail.com',
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;


// host: process.env.SMPT_HOST,
// port: process.env.SMPT_PORT,
// service: process.env.SMPT_SERVICE,
// auth: {
//   user: process.env.SMPT_MAIL,
//   pass: process.env.SMPT_PASSWORD,
// },
// });

// const mailOptions = {
// from: process.env.SMPT_MAIL,