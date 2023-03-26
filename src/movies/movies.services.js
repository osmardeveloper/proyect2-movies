const moviesControllers = require('./movies.controllers')

const getAllMovies = (req, res) => {
    moviesControllers.findAllMovies()
    .then((data) => {
        res.status(200).json(data)
    })
    .catch((err) => {
        res.status(400).json({message: err})
    })
}

const getMovieById = (req, res) => {
    const id = Number(req.params.id)
    moviesControllers.findMovieById(id)
    .then((data) => {
        if(!data) {
            return res.status(404).json({message: 'Movie not found'})
        }
        res.status(200).json(data)
    })
    .catch((err) => {
        res.status(400).json({message: err})
    })
}

const postNewMovie = (req, res) => {
    const movieObj = req.body
    moviesControllers.createMovie(movieObj)
    .then(data => {
        res.status(201).json(data)
    })
    .catch(err => {
        res.status(400).json({message: err})
    })
}

module.exports = {
    getAllMovies,
    getMovieById,
    postNewMovie
}