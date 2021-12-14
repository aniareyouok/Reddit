
// 7. Installeer react-router-dom en implementeer routing voor jouw twee paginas
// 8. Zet een aantal elementen op de pagina's als dummy-tekst
// 9. Begin dan pas met het ophalen van ECHTE data op de home pagina

import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function HomePage() {

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
            <h1>Hottest 15 posts on Reddit</h1>
            {posts.map((post)=>{
                return (
                <div>
                    <h3>{post.data.title}</h3>
                    <p><Link to="">r/{post.data.subreddit}</Link> | {post.data.num_comments} comments - {post.data.ups} ups</p>
                </div>
                )
            })}
        </div>
    )
}
export default HomePage;
