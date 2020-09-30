const initialState = [];

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'movies/moviesFetched':
            return [...action.payload];
        default:
            return state;
    }
}

export default moviesReducer;