import { useState } from 'react';
import axios from 'axios';
// npm install axios

export default function Home() {
  const [numMovies, setNumMovies] = useState(0);
  const [movies, setMovies] = useState([]);

  const GetGhibliMovies = async () => {
    const result = await axios.get("https://ghibliapi.herokuapp.com/films");
    console.log(result)
    setNumMovies(result.data.length);
    setMovies([
      ...result.data
    ])
  }
  return (
    <div >
      <button onClick={() => GetGhibliMovies()}>Get all movies</button>
      <h3>There are #{numMovies} Movies from the Database</h3>

      {
        numMovies > 0 && <div>
          Title of the first movie that comes back from the database...
          {movies[0].title} - {movies[0].original_title}
        </div>
      }

      {
        numMovies > 0 && movies.map(
          (movie, index) => (
            <div key={index}>
              <img src={movie.image}/>
              <div>{movie.title}</div>
            </div>
          )
        )
      }

    </div>
  )
}
