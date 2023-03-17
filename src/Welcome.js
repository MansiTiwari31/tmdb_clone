//import React from 'react'
import {useState} from "react"; 

const Welcome = () => {
  const [gallary, setgalary]=useState([]);
  const submitHandler= (e) => {
    console.log(e)
    e.preventDefault();
    const [search]= e.target;
    const newData={
      search:search.value
      
    };
    setgalary([...gallary, newData])

  } ;


  return (
    <div id="w" className="grid text-center" >
        <div id="w1" className="g-col-6">
            <div id="text1">
            <h1>Welcome.</h1>
            <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
            </div>
            <div class="main-search-input-wrap">
       
            <form class="main-search-input fl-wrap" onSubmit={submitHandler}>
       
                                           <div class="main-search-input-item">
                                               <input type="text"  placeholder="Search for movie, TV show, person..."/>
                                           </div>
                                           
                                           <button class="main-search-button">Search</button>
                                       
                                       </form>
   
                                       </div>
       
       
        </div>
        
        <div id="w2" className="g-col-6">
          <div id="text2">
            <h1>THAT'S A</h1>
<h1>WRAP 2022</h1>
<h5>The best (and worst) from 2022.</h5>
<button>Check it out <span><i class="ri-arrow-right-line"></i></span></button>
          </div>
        
        
        </div>
    </div>

  );
};

export default Welcome;