import styled from 'styled-components'
import {Link as LinkComponent} from '@reach/router'

export const FourOFour = styled.span`
    font-size: 72px;
`

export const NotFoundText = styled.h1`
    color: #F55656;
    margin-top: 20px;
`
export const GoBackButton = styled(LinkComponent)`
    width: 30%;
    background-color: black;
    color: white;
    text-align: center;
    padding: 10px;
    text-decoration: none;
    margin-top: 20px;
    transition: all .2s ease;
    
    &:hover{
        background-color: #F55656;
    }

`

export const Container = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
`