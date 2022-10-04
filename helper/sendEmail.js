const nodemailer = require('nodemailer')
    , { mailConfig } = require('../config')

module.exports = async (email, name) => {
    const msg = {
        from: "'No-replay' <ary@spatialist.co>",
        to: email,
        subject: 'Greeting from GEMSTAR',
        html: `<h3>Hi ${name}, Thanks for your registration, enjoy our services</h3>`
    };    
    nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: mailConfig.email,
            pass: mailConfig.pass
        },
        port: 465,
        host: 'smtp.ethereal.email'
    })
    .sendMail(msg, (err) => {
        if(err) throw new Error(err)
    })
} 