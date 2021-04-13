import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from '@reach/router'
import { Title, Description, Content, Container } from './styles'
import ReactMarkdown from 'react-markdown'

export const DetailedPost = () => {
  const [post, setPost] = useState([])
  const [loading, setLoading] = useState(true)

  const BASE_URL = 'https://hinvlogging-api-heroku.herokuapp.com'

  const params = useParams()
  useEffect(() => {
    axios
      .get(`${BASE_URL}/posts/${params.postId}`)
      .then((response) => {
        setPost(response.data)
      })
      .then(setLoading(false))
  }, [params.postId])

  return (
    <Container>
      {loading ? (
        <h1>Loading</h1>
      ) : post.cover ? (
        <>
          <Title>{post.title}</Title>
          <Description>{post.description}</Description>
          <Content>
            <ReactMarkdown source={post.content} />
          </Content>
        </>
      ) : (
        <>
          <Title>{post.title}</Title>
          <Description>{post.description}</Description>
          <ReactMarkdown source={post.content} />
        </>
      )}
    </Container>
  )
}
