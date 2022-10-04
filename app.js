const express = require('express')
    , env = require('dotenv')

env.config()
const app = express()
    , port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
    
// routes
// app.use('/api',)
    
// global route
app.get('/', (req, res) => {
    res.send('You are ready..')
})
    
// unhandled route
app.all('*', (req, res) => {
    res.send('Are you lost?')
})

app.listen(port, () => console.log(`Running on port: ${port}`))