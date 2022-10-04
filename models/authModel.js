const db = require('../db/connection')

module.exports = {
    getUserByEmail: async (email) => {
        try {
            const query = `SELECT * FROM users WHERE email = ?`
            const [[rows], fields] = await db.query(query, email)
            return rows
        } catch (error) {
            throw new Error(error)
        }        
    },
    createUser: async (data) => {
        try {
            const query = `INSERT INTO users set ?`
            const [rows, fields] = await db.query(query, data)
        } catch (error) {
            throw new Error(error)
        }
    }
}