const authModel = require('../models/authModel')
    , bcrypt = require('../libraries/bcryptLib')
    , sendMail = require('../helper/sendEmail')
    , validation = require('../libraries/JoiLib')
    , jwtLib = require('../libraries/jwtLib')

module.exports = {
    signup: async (req, res) => {
        try {
            const payload = await validation.signupSchema.validateAsync(req.body)
            let { name, email, password, retypePassword } = payload

            if(password != retypePassword) throw new Error('Password is not match')

            // validate password pattern using regex
            // should has at least one uppercase, one lower case, one digit, one special chracter and has min 8 character
            const passwordPattern = new RegExp(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/)
            const patternPass = passwordPattern.test(password)
            if(!patternPass) throw new Error('Check the password requirment!')
            
            // email existing check
            const emailExist = await authModel.getUserByEmail(email)
            if(emailExist) throw new Error('Email already used, wanna login?')

            // password encryption
            password = bcrypt.hasher(password)
            const newUser = await authModel.createUser({
                name, email, password
            })
            // send email notification
            await sendMail(email, name)
            res.status(201).json({
                status: 'Success'
            })
        } catch (error) {
            res.status(400).json({
                status: 'Failed',
                message: error.message
            })
        }
    },
    login: async (req, res) => {
        try {
            const payload = await validation.loginSchema.validateAsync(req.body)
            const { email, password } = payload

            // user exist check
            const user = await authModel.getUserByEmail(email)
            if(!user) throw new Error('Email is not registred, wanna signup?')

            // validate password
            const passwordMatch = bcrypt.checker(password, user.password)
            if(!passwordMatch) throw new Error('Wrong password')

            // generate token
            const token = jwtLib.generate({
                id: user.id,
                email: user.email
            })

            res.status(200).json({
                status: 'success',
                token
            })
        } catch (error) {
            res.status(400).json({
                status: 'Failed',
                message: error.message
            })
        }
    }
}