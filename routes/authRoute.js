const router = require('express').Router()
    , authController = require('../controllers/authControlllers')

router.post('/auth/signup', authController.signup)
router.post('/auth/login', authController.login)

module.exports = router