import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import HeaderNav from '../../components/HeaderNav'

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
        <div className="wrapper">
            <HeaderNav />
            <h2>Hottest 15 posts on Reddit</h2>
            {posts.map((post)=>{
                let aboutLink = "https://www.reddit.com/" + post.data.subreddit_name_prefixed + "/about.json";
                let postLink = "https://www.reddit.com/" + post.data.permalink;
                return (
                <div className="posts">
                    <h4><a href={ postLink }>{post.data.title}</a></h4>
                    <p><Link to={aboutLink}>{post.data.subreddit_name_prefixed}</Link> | {post.data.num_comments} comments - {post.data.ups} ups</p>
                </div>
                )
            })}
        </div>
    )
}
export default HomePage;
