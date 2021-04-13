import styled from 'styled-components';
import { Link as LinkComponent } from '@reach/router';

export const Container = styled.div`
    width: 100%;
    min-width: 100%;
    display: flex;
    align-items: center;
    padding: 20px;
    overflow: hidden;
    @media only screen and (max-width: 360px) {
        font-size: 32px;
    }
`
export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const Button = styled(LinkComponent)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 270px;
    height: 60px;
    background-color: #C4C4C4;
    color: #FFFFFF;
    text-decoration: none;
    font-size: 24px;
    font-weight:  400;
    margin-top: 30px;
    transition: all .2s ease;
    &:hover{
        background-color: #989B9E;
        font-size: 26px;
    }
`

export const Title = styled.h1`
    font-size: 36px;
    font-weight: bold;

`

export const Description = styled.h2`
    font-size: 24px;
    font-weight: 400;
`

export const AutorDate = styled.p`
    font-size: 14px;
    color: #989B9E;
    font-weight: 400;
    margin: 5px 0px 5px!important;
    padding: 5px 0px 5px!important;
`

