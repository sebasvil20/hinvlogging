import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from '@reach/router'
import { Title, Description, Content, Container } from './styles'
import ReactMarkdown from 'react-markdown'
import { LoaderComponent } from '../Loader'

export const DetailedPost = () => {
  const [post, setPost] = useState([])
  const [loading, setLoading] = useState(true)

  const BASE_URL = 'https://hinvlogging-api-heroku.herokuapp.com' 
  
  //https://hinvlogging-api-heroku.herokuapp.com
  //http://localhost:1337

  const params = useParams()
  const FETCHURL = `${BASE_URL}/posts/${params.postId}`
  useEffect(() => {
    async function getData() {
      const result = await axios(FETCHURL)
      setPost(result.data)
      setLoading(false);
    }
    getData()
  }, [FETCHURL])

  return (
    <Container>
      {loading ? (
        <LoaderComponent />
      ) :  (
        <>
          <Title>{post.title}</Title>
          <Description>{post.description}</Description>
          <Content>
            <ReactMarkdown source={post.content} />
          </Content>
        </>
      )}
    </Container>
  )
}
