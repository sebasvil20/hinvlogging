import React from 'react'
import { useNearScreen } from '../../hooks/useNearScreen'
import {
  CardContainer,
  TextContainer,
  Button,
  Description,
  Title,
  AutorDate,
} from './styles'

export const PostCard = ({ id, title, description, userDate }) => {
  const [show, element] = useNearScreen()

  return (
    <CardContainer ref={element}>
      {show && (
        <TextContainer>
          <Title>{title}</Title>
          <AutorDate> {userDate} </AutorDate>
          <Description>{description}</Description>
          <Button to={`/detail/${id}`}>VIEW FULL POST</Button>
        </TextContainer>
      )}
    </CardContainer>
  )
}
