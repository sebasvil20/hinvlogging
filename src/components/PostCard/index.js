import React from 'react'
import { Container, TextContainer, Button, Description, Title, AutorDate } from './styles'

export const PostCard = ({ id, title, description, cover, userDate }) => {
  return (
    <Container>
      <TextContainer>
        <Title>{title}</Title>
        <AutorDate> {userDate} </AutorDate>
        <Description>{description}</Description>
        <Button to={`/detail/${id}`}>VIEW FULL POST</Button>
      </TextContainer>
    </Container>
  )
}
