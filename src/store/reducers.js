import { GET_MOVIES, GET_CHARACTERS } from './actions'

const initialState = {
    movies: [],
    characters: [],
    isLoading: false,
    error: null

}

export default function reducer(state = initialState, action){
    const { type, payload } = action
    switch (type) {
        case GET_MOVIES:
            return { ...state, movies: payload }
        case GET_CHARACTERS:
            return { ...state, characters: payload }
        default:
            return state
    }
}