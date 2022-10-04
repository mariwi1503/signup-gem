require('dotenv').config()

module.exports = {
    port: process.env.PORT || 5000,
    dbConfig: {
        port: process.env.DB_PORT,
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
    mailConfig: {
        email: process.env.EMAIL,
        pass: process.env.EMAIL_PASS
    }
}