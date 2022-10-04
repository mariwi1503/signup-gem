const authModel = require('../models/authModel')
    , bcrypt = require('../libraries/bcryptLib')
    , sendMail = require('../helper/sendEmail')
    , validation = require('../libraries/JoiLib')

module.exports = {
    signup: async (req, res) => {
        try {
            const payload = await validation.signupSchema.validateAsync(req.body)
            let { name, email, password, retypePassword } = payload

            if(password != retypePassword) throw new Error('Password is not match')
            // email existing check
            const emailExist = await authModel.getUserByEmail(email)
            if(emailExist) throw new Error('Email already used!')

            // password encryption
            password = bcrypt.hasher(password)
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