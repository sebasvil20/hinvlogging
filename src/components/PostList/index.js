import React, { useEffect, useState } from 'react'
import { PostCard } from '../PostCard'
import axios from 'axios'
import { NothingHere } from '../NothingHere'
import { LoaderComponent } from '../Loader'

import { Input, Container, PostListContainer } from './styles'

export const PostList = ({ category }) => {
  const [posts, setPosts] = useState([])
  const [postsCopy, setPostscopy] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  const BASE_URL = 'https://hinvlogging-api-heroku.herokuapp.com'

  //https://hinvlogging-api-heroku.herokuapp.com
  //http://localhost:1337

  const FETCHURL = category
    ? `${BASE_URL}/categories/${category}`
    : `${BASE_URL}/posts`

  async function getData() {
    const result = await axios(FETCHURL)
    const postArray = (category ? result.data.posts : result.data).reverse()
    setPosts(postArray)
    setPostscopy(postArray)
    setLoading(false)
  }

  useEffect(() => {
    if (search === '') {
      getData()
    } else {
      setLoading(true)
      const filter = async () => {
        const filtered = await postsCopy.filter((post) => {
          return post.title.toLowerCase().includes(search.toLowerCase())
        })
        setPosts(filtered)
        setLoading(false)
      }
      filter()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  return (
    <Container>
      <Input
        type='text'
        value={search}
        placeholder='Search for something cool...'
        onChange={(e) => setSearch(e.target.value)}
      />
      <PostListContainer>
        {loading ? (
          <LoaderComponent />
        ) : posts.length !== 0 ? (
          posts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              description={post.description}
              userDate={`${post.releaseDate} ${post.admin_user.firstname} ${post.admin_user.lastname}`}
            />
          ))
        ) : (
          <NothingHere />
        )}
      </PostListContainer>
    </Container>
  )
}
