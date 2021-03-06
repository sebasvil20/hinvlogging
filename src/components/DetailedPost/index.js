import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from '@reach/router'
import { Title, Description, Content, Container, AuthorDate } from './styles'
import ReactMarkdown from 'react-markdown'
import { LoaderComponent } from '../Loader'
import { Helmet } from 'react-helmet'

export const DetailedPost = () => {
  const [post, setPost] = useState([])
  const [loading, setLoading] = useState(true)

  const params = useParams()
  const BASE_URL = 'https://hinvlogging-api-heroku.herokuapp.com'
  //https://hinvlogging-api-heroku.herokuapp.com
  //http://localhost:1337

  const FETCHURL = `${BASE_URL}/posts?slug=${params.postSlug}`

  useEffect(() => {
    async function getData() {
      const result = await axios(FETCHURL)
      setPost(result.data[0])
      setLoading(false)
    }
    getData()
  }, [FETCHURL])

  return (
    <>
    <Helmet>
          <title>{`${post.title} | Hinvloggin'`}</title>
          <meta name='description' content={`${post.description}'`} />
        </Helmet>
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
    </Container></>
  )
}
