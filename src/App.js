//import { useEffect, useState } from "react";
//import axios from "axios";
import "./Stylesheets/nav.css";
import { Routes, Route, Link } from "react-router-dom";
import Details from "./Details";
import Navigation from "./Navigation";
import Welcome from "./Welcome";
import Trending from "./Trending";
import Popular from "./Popular";
import TvShows from "./TvShows";
import Footer from "./Footer";
const App = () => {
    


    return (
        <div>
            <Navigation />
            
            <Routes>
                <Route path="/" element={<Welcome/>} />
            </Routes>
            <Routes>
                <Route path="/" element={<Trending/>} />
            </Routes>
            <Routes>
                <Route path="/" element={<Popular/>} />
            </Routes>
            <Routes>
                <Route path="/" element={<TvShows/>} />
            </Routes>
            <Routes>
                <Route path="/" element={<Footer/>} />
            </Routes>
            <Routes>
                <Route path="/details/:id" element={<Details />} />
            </Routes>

            
        </div>
    );
    }


export default App;
