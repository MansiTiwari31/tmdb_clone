//import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import tlogo from './Stylesheets/tlogo.PNG'
//import { DataContext } from "../App";

const Navigation = () => {
    
    //const d = useContext(DataContext);
    //console.log(d);
    
    return (
       
        <nav>

            <NavLink
                
                to="/">
                    
               <img src={tlogo} alt="tlogo" />
            </NavLink>
            
           
            <NavLink
                
                to="/">
                Movies
            </NavLink>
            <NavLink
                
                to="/">
                TV Shows
            </NavLink>
            <NavLink
                
                to="/">
                People
            </NavLink>
            <NavLink
                
                to="/">
                More
            </NavLink>
           <NavLink to="/">
           <i class="ri-menu-line"></i>
           </NavLink>
           
        </nav>
      
    
    );
};

export default Navigation;