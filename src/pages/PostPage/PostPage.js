import React, {useEffect, useState} from "react";
import axios from "axios";
import HeaderNav from '../../components/HeaderNav'

function PostPage() {

    const [posts, setPosts] = useState([]);

    useEffect(()=> {

        async function fetchPost() {
            try {

                const result = await axios.get(`https://www.reddit.com/`)
                console.log(result.data.data.children)
                setPosts(result.data.data.children)
            } catch (e) {
                console.error(e)
            }

        }

        fetchPost();
    }, [])

    return (
        <>
        <HeaderNav />
        <div className="wrapper">
            <h2>Dit is de Post Pagina</h2>
            {posts.map((post)=>{
                return <div>{post.data.title}</div>
            })}
        </div>
        </>
    )
}

export default PostPage;