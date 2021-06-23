import React, { useEffect } from 'react'
import { Card, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../store/actions'
import MovieCard from '../components/MovieCard'

export default function MovieList(){
    // const [movies, setMovies] = useState([])
    const dispatch = useDispatch()
    const movies = useSelector((state) => state.movies)

    useEffect(() => {
        dispatch(getMovies())
    }, [dispatch]) 

    // useEffect(() => {
    //     fetch(`https://swapi.dev/api/films/`)
    //     .then(response => response.json())
    //     .then(data => setMovies(data.results))
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }, [])


    return(
        <React.Fragment>
            <h1 className="text-center mt-3">Movie List</h1>
            {/* <p>{JSON.stringify(movies, 2, null)}</p> */}
            <Card>
                <Card.Body>
                    <Row>
                        { movies.map(movie => {
                            return  (
                                <MovieCard
                                movie={movie}
                                key={movie.episode_id}
                                />
                            )
                        })}
                    </Row>
                </Card.Body>
            </Card>
        </React.Fragment>
    )
}