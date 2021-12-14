
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
                let aboutLink = "https://www.reddit.com/" + post.data.subreddit_name_prefixed + "/about.json";
                let postLink = "https://www.reddit.com/" + post.data.permalink;
                return (
                <div>
                    <h3><a href={ postLink }>{post.data.title}</a></h3>
                    <p><Link to={aboutLink}>{post.data.subreddit_name_prefixed}</Link> | {post.data.num_comments} comments - {post.data.ups} ups</p>
                </div>
                )
            })}
        </div>
    )
}
export default HomePage;
