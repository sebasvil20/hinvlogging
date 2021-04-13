
import React from 'react'
import {Title, Subtitle, Hero, Link, Nav} from './styles'


export const PageLayout = () => {

  return (
    <Hero>
      <Title to="/">Hinvloggin'</Title>
      <Subtitle>stories, tutorials, lifestyle, inspiration</Subtitle>
      <Nav>
        <Link to="/">
          ALL
        </Link>
        <Link to="/tutorials">
          TUTORIALS
        </Link>
        <Link to="/lifestyle">
          LIFESTYLE
        </Link>
        <Link to="/inspiration">
          INSPIRATION
        </Link>
        <Link to="/stories">
          STORIES
        </Link>
      </Nav>
    </Hero>
  )
}
