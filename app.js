const express = require('express')
    , config = require('./config')
    , authRoute = require('./routes/authRoute')
    , endpoints = require('./endpoints')

const app = express()
    , port = config.port || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
    
// routes
app.use('/api', authRoute)
    
// global route
app.get('/', (req, res) => {
    res.send(endpoints)
})
    
// unhandled route
app.all('*', (req, res) => {
    res.send('Are you lost?')
})

app.listen(port, () => console.log(`Running on port: ${port}`))