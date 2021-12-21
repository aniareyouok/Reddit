import React from "react";
import './App.css'
import { Link } from 'react-router-dom'
import HeaderNav from './components/HeaderNav'
import Hero from './assets/reddit_hero.png'

function App() {


  return (
      <>
          <HeaderNav />
          <img src={Hero} alt="" />
      </>
  )
}
export default App;
