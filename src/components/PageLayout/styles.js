import styled from 'styled-components';
import { Link as LinkComponent } from '@reach/router'

export const Title = styled(LinkComponent)`
    color: white;
    font-weight: bold;
    font-size: 72px;
    padding: 50px 20px 0px; 
    text-decoration: none;
    transition: all .2s ease;
    &:hover{
        color: #7C7C7C;
    }
`;

export const Subtitle = styled.h2`
    color: #989B9E;
    font-weight: bold;
    font-size: 48px;
    padding: 0 20px 50px;
`;

export const Hero = styled.div`
    width: 100%;
    background-color: #C4C4C4;
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
`

export const Link = styled(LinkComponent)`
    color: #FDFDFD;
    font-weight: bold;
    font-size: 20px;
    text-decoration: none;
    transition: all .2s ease;
    &:hover{
        color: #7C7C7C;
    }
    &[aria-current]{
        color: #7C7C7C;
    }
`