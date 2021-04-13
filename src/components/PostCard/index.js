import React from 'react'
import { Container, Image, TextContainer, Button, Description, Title, AutorDate } from './styles'

export const PostCard = ({ id, title, description, cover, userDate }) => {
  return (
    <Container>
      <Image src={cover}/>
      <TextContainer>
        <Title>{title}</Title>
        <AutorDate> {userDate} </AutorDate>
        <Description>{description}</Description>
        <Button to={`/detail/${id}`}>VIEW FULL POST</Button>
      </TextContainer>
    </Container>
  )
}
