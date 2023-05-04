import { createTransport } from 'nodemailer';
import dotenv from 'dotenv'

dotenv.config({path:"./.env"})

const TEST_MAIL = process.env.email


 const transporter = createTransport({
  service: 'gmail',
  port: 587,
  auth: {
      user: TEST_MAIL,
      pass: process.env.claveEmail
  }
});

export default transporter


// const mailOptions = {
//   from: TEST_MAIL,
//   to: 'alenarty1006@gmail.com',
//   subject: 'Prueba realizada!!!',
//   html: 'Orden realizada'
// }

// try {
//   const info = await transporter.sendMail(mailOptions)
//   console.log(info)
// } catch (err) {
//   console.log(err)
// }








