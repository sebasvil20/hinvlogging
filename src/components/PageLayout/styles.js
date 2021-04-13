import styled from 'styled-components'
import { Link as LinkComponent } from '@reach/router'

export const Title = styled(LinkComponent)`
  color: white;
  font-weight: bold;
  font-size: 72px;
  padding: 50px 20px 0px;
  text-decoration: none;
  transition: all 0.2s ease;
  &:hover {
    color: #7c7c7c;
  }
  @media only screen and (max-width: 360px) {
    font-size: 32px;
  }

  @media only screen and (max-width: 880px){
    font-size: 58px;
  }
`

export const Subtitle = styled.h2`
  color: #989b9e;
  font-weight: bold;
  font-size: 48px;
  padding: 0 20px 50px;

  @media only screen and (max-width: 360px) {
    font-size: 20px;
  }

@media only screen and (max-width: 880px){
  font-size: 32px;
}
`

export const Hero = styled.div`
  width: 100%;
  background-color: #c4c4c4;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const Nav = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
  margin: auto;
  padding: 20px;

  @media only screen and (max-width: 860px) {
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }

  @media only screen and (max-width: 1600px){
    width: 70%;
    align-items: space-between;
  }
`

export const Link = styled(LinkComponent)`
  color: #fdfdfd;
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
  transition: all 0.2s ease;
  &:hover {
    color: #7c7c7c;
  }
  &[aria-current] {
    color: #7c7c7c;
  }

  @media only screen and (max-width: 360px) {
    padding: 10px;
    width: 200px;
    text-align: center;
  }
  @media only screen and (max-width: 860px){
    
    margin-bottom: 7px;
  }
`
