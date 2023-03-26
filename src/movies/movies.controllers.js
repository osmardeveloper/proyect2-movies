const moviesDb = [
  {
    id: 1,
    title: 'Coco',
    description: 'Lorem ipsum',
    year: 2017,
    director: 'Adrián Molina'
  }
]

let movieId = 2

const findAllMovies = async () => {
  return moviesDb
}

const findMovieById = async (id) => {
      const movie = moviesDb.find(movieItem => movieItem.id === id)
          return movie
}

const createMovie = async (movieObj) => {
  const newMovie = {
      id: movieId++,
      title: movieObj.title || 'Untituled',
      description: movieObj.description || 'Lorem ipsum',
      year: movieObj.year || null,
      director: movieObj.director || null
  }
  moviesDb.push(newMovie)
  return newMovie
  }

  module.exports = {
  findAllMovies,
  findMovieById,
  createMovie
  }
