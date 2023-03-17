import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import "./Stylesheets/nav.css";
import { Routes, Route, Link } from "react-router-dom";

const Trending = () => {
    const [Movies, setMovies] = useState([]);
    const getPopularMovies = async () => {
        try {
            const { data } = await axios.get(
                "https://api.themoviedb.org/3/movie/popular?api_key=223667d1239871fc4b6eeef8d0d6def8&language=en-US&page=1"
            );
            console.log(data);
            setMovies(data.results);
        } catch (err) {
            console.log(err);
        }
        
}

useEffect(() => {
    getPopularMovies();
}, []);

let MovieList = "Loading...";

if (Movies.length > 0) {
    
    MovieList = Movies.map((m) => (
        
        <li id="ele">
                <Link to={`/details/${m.id}`} id="li"><div id="card" >
                    <img src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`} alt="" />
                    <div id="card-body">
                    <svg viewBox="0 0 36 36" class="circular-chart orange" ><path class="circle-bg" d="M18 2.0845
a 15.9155 15.9155 0 0 1 0 31.831
a 15.9155 15.9155 0 0 1 0 -31.831"></path><path class="circle" stroke-dasharray="75" d="M18 2.0845
a 15.9155 15.9155 0 0 1 0 31.831
a 15.9155 15.9155 0 0 1 0 -31.831"></path><text x="18" y="20.35" class="percentage">{m.vote_average}</text></svg>
<p class="card-text">{m.title}</p>
                    </div>
                    </div>
                </Link>
                </li>
    ));
};
return (
    
<ul id="list"> 
<h1 id='h1'>Popular</h1>
        {MovieList}
       </ul>
)}

export default Trending