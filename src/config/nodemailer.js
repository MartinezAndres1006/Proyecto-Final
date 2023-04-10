import nodemailer from 'nodemailer'


function sendEmail(correo, nombre) {
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'earlene.streich@ethereal.email',
            pass: 'rGHqNVJDYZa3wGj4SQ'
        }
    });
  
    const message = {
      from: 'elmagomp11@gmail.com',
      to: correo,
      subject: 'Bienvenido a nuestro sitio web',
      text: `Hola ${nombre},\n\n¡Gracias por registrarte en nuestro sitio web! Esperamos que disfrutes de nuestros productos y servicios.\n\nSaludos cordiales`
    };
  
    transporter.sendMail(message, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Correo electrónico enviado: ' + info.response)
        ;
      }
    });
  }
  
  export default sendEmail