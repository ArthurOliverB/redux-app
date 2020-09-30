import httpClient from './httpClient';

export const getMovies = () => httpClient.get();

export const getMovieById = (id) => httpClient.get(`/${id}`);

export const createNewMovie = (movie) => httpClient.post('/', movie);

export const deleteMovieById = (id) => httpClient.delete(`/${id}`);

// export const updateMovieById = (id) => httpClient.put(`/${id}`);