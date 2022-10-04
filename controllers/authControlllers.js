const authModel = require('../models/authModel')
    , bcrypt = require('../libraries/bcryptLib')
    , sendMail = require('../helper/sendEmail')

module.exports = {
    signup: async (req, res) => {
        try {
            let { name, email, password1, password2 } = req.body

            if(password1 != password2) throw new Error('Password is not match')
            // email existing check
            const emailExist = await authModel.getUserByEmail(email)
            if(emailExist) throw new Error('Email already used!')

            // password encryption
            const password = bcrypt.hasher(password1)
            const newUser = await authModel.createUser({
                name, email, password
            })
            // send email notification
            await sendMail(email)
            res.status(201).json({
                status: 'Success'
            })
        } catch (error) {
            res.status(400).json({
                status: 'Failed',
                message: error.message
            })
        }
    }
}