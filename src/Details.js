import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
    const [Movie, setMovie] = useState(null);
    const { id } = useParams();
    console.log(id);

    const getDetails = async () => {
        try {
            const { data } = await axios.get(
                `https://api.themoviedb.org/3/movie/${id}?api_key=223667d1239871fc4b6eeef8d0d6def8&language=en-US`
            );
           
            setMovie(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getDetails();
    }, [id]);

    let MovieDetails = "Loading...";

    if (Movie) {
        MovieDetails = (
            <div id="details">
                <div id="part2"><img
                    src={`https://image.tmdb.org/t/p/w500/${Movie.poster_path}`}
                    alt={Movie.poster_path}
                    height={200}
                /></div>
                <div id="part1"><h1>{Movie.original_title}</h1>
                <h3>{Movie.release_date} ({Movie.original_language})</h3>
                <svg viewBox="0 0 36 36" class="circular-chart orange" ><path class="circle-bg" d="M18 2.0845
 a 15.9155 15.9155 0 0 1 0 31.831
 a 15.9155 15.9155 0 0 1 0 -31.831"></path><path class="circle" stroke-dasharray="75" d="M18 2.0845
 a 15.9155 15.9155 0 0 1 0 31.831
 a 15.9155 15.9155 0 0 1 0 -31.831"></path><text x="18" y="20.35" class="percentage">{Movie.vote_average}</text></svg>
 <p class="card-text">User Rating</p>
                       <h2>Overview</h2>
                       <p id="p">{Movie.overview}</p>
                        </div>
            </div>
        );
    }

    return <div>{MovieDetails}</div>;
};

export default Details;
