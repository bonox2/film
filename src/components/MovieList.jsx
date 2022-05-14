import { useState, useEffect } from 'react';
import { getMovies } from '../api/movies';
import MovieCard from './MovieCard';

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies().then(movies => setMovies(movies)).catch(err => console.log(err));
  }, [])
  return <div>{movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}</div>;
}


// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numsPlusOne = nums.map(num => addOneToNum(num));

// function addOneToNum(num) {
//     return num + 1;
// }


// const names = ['Alice', 'Bob', 'Charlie'];
// const namesInPragraphs = names.map(name => <p>{name}</p>);

// console.log(numsPlusOne, namesInPragraphs);