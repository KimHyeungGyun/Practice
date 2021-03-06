import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      movies: [],
    };
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.nomadcoders1.now.sh/list_movies.json');
    this.setState({ movies, isLoading: false });
    // console.log(movies);
  }

  render() {
    const { isLoading, movies } = this.state;

    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
            <div className="movies">
              {movies.map((movie) => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              ))}
            </div>
          )}
      </section>
    );
  }
}

export default App;
