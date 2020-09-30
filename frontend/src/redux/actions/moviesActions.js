import { getMovies } from  '../../api/movies.api'
export const fetchMovies = () => {
    return dispatch => {
        getMovies().then(({ data }) => {
            dispatch({
                type: 'movies/moviesFetched',
                payload: data
            })
        })
    }
}