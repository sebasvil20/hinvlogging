import React, { useEffect, useState } from 'react'
import { PostCard } from '../PostCard'
import axios from 'axios'
import { NothingHere } from '../NothingHere'
import { LoaderComponent } from '../Loader'

export const PostList = ({category}) => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  const BASE_URL = 'http://localhost:1337'

  const FETCHURL = category ? `${BASE_URL}/categories/${category}` : `${BASE_URL}/posts` 

  useEffect(() => {
    async function getData() {
      const result = await axios(FETCHURL)
      category ? setPosts(result.data.posts) : setPosts(result.data)
      setLoading(false);
    }
    getData()
  }, [FETCHURL, category])

  return (
    <div className='postList'>
      {
          loading ? 
          <LoaderComponent />
          :(
            posts.length !== 0 ? 
          posts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              cover={post.cover.name}
              title={post.title}
              description={post.description}
              userDate = {`${post.releaseDate} ${post.admin_user.firstname} ${post.admin_user.lastname}`}
            />
          ))
          :
          <NothingHere />
          )
      }
    </div>
  )
}
