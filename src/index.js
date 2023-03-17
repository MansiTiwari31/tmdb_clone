import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <App />
    
    </BrowserRouter>
    
);
document.querySelector("#w2 h5").addEventListener("click",function(){
        document.querySelector("nav a:nth-child(4)").style.opacity="1"
    })
