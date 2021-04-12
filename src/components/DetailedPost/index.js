import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {useParams, Link} from '@reach/router'


export const DetailedPost = () => {
    const [post, setPost] = useState(
        []
    )

    const params = useParams()
    useEffect(()=> {
        axios.get(`http://localhost:1337/posts/${params.postId}`).then(response => {
          setPost(response.data)
        });
    },[])

    return(
        <>
            <h1>{post.title}</h1>
            <h3>{post.description}</h3>
            <p>{post.content}</p>

            <Link to="/"> Home </Link>
        </>
    )
}