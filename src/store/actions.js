export const GET_MOVIES = 'movies/getMovies'
export const GET_CHARACTERS = 'movies/getCharacters'

export function getMovies(){
    return(dispatch) => {
        fetch(`https://swapi.dev/api/films/`)
        .then(response => response.json())
        .then(data => 
            // data.results
            dispatch({ type: GET_MOVIES, payload: data.results })
        )
        .catch(err => {
            console.log(err)
        })
    }
}

export function getCharacters(){
    return(dispatch) => {
        fetch(`https://swapi.dev/api/people/`)
        .then(response => response.json())
        .then(data => 
            // data.results
            dispatch({ type: GET_CHARACTERS, payload: data.results })
        )
        .catch(err => {
            console.log(err)
        })
    }
}