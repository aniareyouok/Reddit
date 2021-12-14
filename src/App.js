import React, {useEffect, useState} from "react";
import axios from "axios";
import './App.css';

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(()=> {

    async function fetchReddit() {
      try {
        const result = await axios.get('https://www.reddit.com/hot.json?limit=15')
        console.log(result.data.data.children)
        setPosts(result.data.data.children)
      } catch (e) {
        console.error(e)
      }

    }

    fetchReddit();
  }, [])

  return (
      <div>
        <h1>Dit is de homepagina</h1>
          {posts.map((post)=>{
          return <div>{post.data.title}</div>
          })}
      </div>
  )
}
export default App;
