const Joi = require('@hapi/joi')

module.exports = {
    signupSchema: Joi.object({
        name: Joi.string().min(2).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required(),
        retypePassword: Joi.string().min(8).required()
    })
}
