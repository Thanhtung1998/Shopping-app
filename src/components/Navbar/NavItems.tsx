// import { useContext } from 'react'
import styled, { css } from 'styled-components';
import tw from "twin.macro"
import { slide as Menu } from 'react-burger-menu'
import { useMediaQuery } from 'react-responsive'
import { SCREEN } from '../responsive';
import menuStyles from './menuStyles';
import { HomeIcon, PhoneIcon, ServerIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import {
    // BrowserRouter as Router,
    Link, useHistory
} from "react-router-dom";
// import { AuthContext } from '../../context/Authcontext/AuthContext';
// import { logout } from "../../context/Authcontext/AuthActions";
import '../../css/navbar.css'

const ListContainer = styled.ul`
    z-index: 3;
    ${tw`
    list-none
    flex
    `};

`;

const NavItem = styled.li<{ menu?: any }>`
    height: 100%;
    ${tw`
        h-full
        flex
        items-center
        text-xs
        md:text-xl
        text-white
        font-semibold
        text-gray-400
        mr-1
        md:mr-5
        cursor-pointer
        transition
        duration-300
        ease-in-out
        hover:text-blue-700
    `};

    ${({ menu }) => menu && css`
    
    ${tw`
    text-white
    text-xl
    mb-3
    focus: text-white
    `}
    
    `}
`;


export function NavItems(props: any) {

    const isMobie = useMediaQuery({ maxWidth: SCREEN.xl })

    // const { state } = useContext(AuthContext);
    // const { dispatch } = useContext(AuthContext);

    // const user = state.user;

    const history = useHistory();


    // console.log();


    if (isMobie) {
        return (
            <>
                <Menu right styles={menuStyles}>
                    <ListContainer>
                        <NavItem ><Link to="/" className="flex w-full items-center text-lg"> <HomeIcon style={{ height: "18px" }} />Home</Link></NavItem>
                        <NavItem ><Link to="/about" className="flex w-full items-center text-lg"><ShoppingCartIcon style={{ height: "18px" }} />Cars</Link></NavItem>
                        <NavItem ><Link to="/services" className="flex w-full items-center text-lg"><ServerIcon style={{ height: "18px" }} />Services</Link></NavItem>
                        <NavItem ><Link to="/contact" className="flex w-full items-center text-lg"><PhoneIcon style={{ height: "18px" }} />Contact</Link></NavItem>
                    </ListContainer>
                </Menu>
            </>
        );
    }
    return (
        <ListContainer>
            <NavItem className={history.location.pathname === '/' ? "activeS" : ""} ><Link to="/" className="flex items-center"> <HomeIcon style={{ height: "16px" }} />Home</Link></NavItem>
            <NavItem className={history.location.pathname === '/about' ? "activeS" : ""}><Link to="/about" className="flex items-center"><ShoppingCartIcon style={{ height: "16px" }} />Cars</Link></NavItem>
            <NavItem className={history.location.pathname === '/services' ? "activeS" : ""}><Link to="/services" className="flex items-center"><ServerIcon style={{ height: "16px" }} />Services</Link></NavItem>
            <NavItem className={history.location.pathname === '/contact' ? "activeS" : ""}><Link to="/contact" className="flex items-center"><PhoneIcon style={{ height: "16px" }} />Contact</Link></NavItem>
            {/* {user ? <NavItem } >{user.username}</NavItem> : <NavItem ><Link to="/login" className="flex items-center">Login</Link></NavItem>} */}
        </ListContainer>
    );

}