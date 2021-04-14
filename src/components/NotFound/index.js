import React from 'react'
import {FourOFour, NotFoundText, GoBackButton, Container} from './styles'

export const NotFound = () => (
    <Container>
        <FourOFour>404</FourOFour>
        <NotFoundText>OOPS... Are you lost?</NotFoundText>
        <GoBackButton to="/" >Go home again, I'm lost :(</GoBackButton>
    </Container>
)