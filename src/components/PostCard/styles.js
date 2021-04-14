import styled from 'styled-components'
import { Link as LinkComponent } from '@reach/router'
import { fadeIn } from '../../styles/animation'

export const CardContainer = styled.article`
  width: 100%;
  min-width: 100%;
  display: flex;
  align-items: center;
  padding: 20px;
  overflow: hidden;
  min-height: 200px;
  @media only screen and (max-width: 360px) {
    font-size: 32px;
  }
`
export const TextContainer = styled.div`
  ${fadeIn({
    time: '0.5s',
  })}
  display: flex;
  width: 100%;
  flex-direction: column;
`

export const Button = styled(LinkComponent)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 50px;
  background-color: #c4c4c4;
  color: #ffffff;
  text-decoration: none;
  font-size: 22px;
  font-weight: 400;
  margin-top: 30px;
  transition: all 0.2s ease;
  &:hover {
    background-color: #989b9e;
    font-size: 26px;
  }

  @media only screen and (max-width: 900px) {
    font-size: 18px;
    width: 200px;
    height: 40px;
  }
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
`

export const Description = styled.h2`
  font-size: 20px;
  font-weight: 400;
`

export const AutorDate = styled.p`
  font-size: 14px;
  color: #989b9e;
  font-weight: 400;
  margin: 5px 0px 5px !important;
  padding: 5px 0px 5px !important;
`

export const Line = styled.hr`
  border: 0.5px solid #989b9e;
  margin-top: 20px;
`
