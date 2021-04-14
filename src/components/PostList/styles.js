import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`

export const Input = styled.input`
  width: 20%;
  border: 1px solid green;
  outline: none;
  height: 40px;
  padding: 10px;
  margin: 15px 0px 15px;
`

export const PostListContainer = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 900px) {
    width: 85%;
  }
`
