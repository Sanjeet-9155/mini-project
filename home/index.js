import React, {useState} from "react";
import { Link } from "react-router-dom";

const Home = () => {


    return(
        <div >
        <nav>
        <ul>
          <Link
           to="/" class="home">
            Home
          </Link>
          <Link to="/todolist" >
            todolist
          </Link>
          <Link to="/counetr" >
          counetr
          </Link>
        </ul>
      </nav>
        </div>
        
    )
}

export default Home;


