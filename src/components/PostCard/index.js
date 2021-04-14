import React from 'react'
import { useNearScreen } from '../../hooks/useNearScreen'
import {
  CardContainer,
  TextContainer,
  Button,
  Description,
  Title,
  AutorDate,
  Line,
} from './styles'

export const PostCard = ({ slug, title, description, userDate }) => {
  const [show, element] = useNearScreen()

  return (
    <CardContainer ref={element}>
      {show && (
        <>
          <TextContainer>
            <Title>{title}</Title>
            <AutorDate> {userDate} </AutorDate>
            <Description>
              {description.length >= 150
                ? `${description.slice(0, 150)} ...`
                : description}
            </Description>
            <Button to={`/detail/${slug}`}>VIEW FULL POST</Button>
            <Line />
          </TextContainer>
        </>
      )}
    </CardContainer>
  )
}
