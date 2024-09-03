import React, { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';

const Api_Url = "http://www.omdbapi.com/?i=tt3896198&apikey=11249bfe";

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const SearchMovies = async (title) => {
        const response = await fetch(`${Api_Url}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    };

    useEffect(() => { 
        SearchMovies('blacklist')
    }, []);

    const movie1 = {
        "Title": "Spiderman the Verse",
        "Year": "2019",
        "imdbID": "tt12122034",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjA2NmZhOGEtZTQ5OS00MDI0LTg4N2UtYTRmOTllM2I2NDlhXkEyXkFqcGdeQXVyNTU4OTE5Nzc@._V1_SX300.jpg"
    }

    return (
        <div className ='app'>
            <div style={{display:'flex'}}>
                <img src="./movieicon.png" style={{width: 60, height: 60}} alt="Search" onClick={() => {}}/>
                <h1>Tender Download System</h1>
            </div>
            <div className ='search'>
                <input placeholder ='search for movies' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <img src="./search1.png" alt="Search" onClick={() => SearchMovies(searchTerm)} />
            </div>
            <div className="container">
                {movies.length > 0 ? (
                    <div> 
                        {movies.map((movie) => ( 
                            <MovieCard movies={movie} />
                        ))}
                    </div>
                ) : (
                    <div className='empty'> 
                        <h1>No movie found!</h1> 
                    </div>
                )}
            </div>
            <footer className='footer'> Copyright 2024    Allahya kwada</footer>
        </div>
    );
}

export default App;
