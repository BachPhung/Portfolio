import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
    background: ${({scrollNav})=>(scrollNav? '#14279B' : '#3D2C8D')};
    height: 70px;
    justify-content:center;
    font_size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 720px) {
        transistion: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 70px;
    z-index: 1;
    width: 100%;
`


export const MobileIcon = styled.div`
    display:none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top:0px;
        right:0px;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;      
        color:white;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    width:100%;
    align-items: center;
    list-style: none;
    text-align: center;
    justify-content: center;
    @media screen and (max-width: 720px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 50px;
    height: 100%;
    cursor: pointer;
    font-size:25px;
    &:active{
        border-bottom: 5px solid #FF865E;
    }
`
