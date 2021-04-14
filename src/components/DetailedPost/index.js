import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from '@reach/router'
import { Title, Description, Content, Container, AuthorDate } from './styles'
import ReactMarkdown from 'react-markdown'
import { LoaderComponent } from '../Loader'

export const DetailedPost = () => {
  const [post, setPost] = useState([])
  const [loading, setLoading] = useState(true)

  const params = useParams()
  const BASE_URL = 'http://localhost:1337'
  //https://hinvlogging-api-heroku.herokuapp.com
  //http://localhost:1337

  const FETCHURL = `${BASE_URL}/posts/${params.postId}`

  useEffect(() => {
    async function getData() {
      const result = await axios(FETCHURL)
      setPost(result.data)
      setLoading(false)
    }
    getData()
  }, [FETCHURL])

  return (
    <Container>
      {loading ? (
        <LoaderComponent />
      ) : (
        <>
          <Title>{post.title}</Title>
          <AuthorDate>{`Escrito el ${post.releaseDate} - Por ${post.admin_user.firstname} ${post.admin_user.lastname}`}</AuthorDate>
          <Description>{post.description}</Description>
          <Content>
            <ReactMarkdown source={post.content} />
          </Content>
        </>
      )}
    </Container>
  )
}
