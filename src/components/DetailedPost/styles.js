import styled from 'styled-components'

export const Container = styled.div`
  width: 60%;
  margin: auto;
  overflow: hidden;

  @media only screen and (max-width: 900px) {
    width: 85%;
  }
`
export const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  color: #3c3b3b;
  margin-top: 20px;

  @media only screen and (max-width: 360px) {
    font-size: 32px;
  }
`

export const Description = styled.p`
  font-size: 22px;
  color: #4e4e4e;
  margin-top: 20px;

  @media only screen and (max-width: 360px) {
    font-size: 20px;
  }
`

export const Content = styled.p`
  font-size: 20px;
  color: #595656;
  margin: 20px 0px 40px;
  line-height: 32px;

  @media only screen and (max-width: 360px) {
    font-size: 18px;
  }
`

export const AuthorDate = styled.p`
  font-size: 14px;
  color: #595656;
  padding: 10px 0px 10px;
`
