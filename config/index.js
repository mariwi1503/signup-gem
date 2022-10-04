require('dotenv').config()

module.exports = {
    port: process.env.PORT || 5000,
    dbConfig: {
        port: 6883,
        host: 'containers-us-west-66.railway.app', // process.env.DB_HOST
        user: 'root', // process.env.DB_USER
        password: 'pXcbNRX4IZhsjGhhqaAF', // process.env.DB_PASSWORD
        database: 'railway', // process.env.DB_NAME
    },
}