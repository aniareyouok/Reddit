import React, {useEffect, useState} from "react";
import axios from "axios";
import './App.css'
import HomePage from "./pages/HomePage/HomePage";
import { Link } from 'react-router-dom'

function App() {


  return (
      <div className="wrapper">
        <h1>De Reddit App</h1>
        <nav>
            <Link to="/home">Home Page </Link>
            <Link to="/post">Post Page </Link>
        </nav>
      </div>
  )
}
export default App;
