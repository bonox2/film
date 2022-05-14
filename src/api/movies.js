import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:1234/movies',
});

api.interceptors.response.use(
  (response) => Promise.resolve(response.data),
  (error) => Promise.reject(error)
);

export function getMovie(id) {
    return api.get(`/${id}`)
}
export function getMovies() {
    return api.get(``)
}
export function addMovie(movie) {
    return api.post(``, movie)
}
export function updateMovie(id, movie) {
    return api.patch(`/${id}`, movie)
}
export function deleteMovie(id) {
    return api.delete(`/${id}`)
}

