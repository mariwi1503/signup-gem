const nodemailer = require('nodemailer')

module.exports = async (email) => {
    const msg = {
        from: "'No-replay' <ary@spatialist.co>",
        to: email,
        subject: 'Gemstar signup',
        text: 'Thank for registration to GEMSTAR, your best consultant'
    };    
    nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ary@spatialist.co',
            pass: 'lbmqrxbjbkosjvsr'
        },
        port: 465,
        host: 'smtp.ethereal.email'
    })
    .sendMail(msg, (err) => {
        if(err) throw new Error(err)
    })
} 