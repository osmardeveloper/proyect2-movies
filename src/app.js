const express = require('express')
const app = express()

const moviesRouter = require('./movies/movies.router')

const PORT = 7000

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'Server OK'})
})

app.use('/', moviesRouter)

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})

module.exports = app
