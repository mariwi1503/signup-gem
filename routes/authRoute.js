const router = require('express').Router()
    , authController = require('../controllers/authControlllers')

router.post('/auth/signup', authController.signup)

module.exports = router