import styled, { css } from 'styled-components';
import tw from "twin.macro"
import { slide as Menu } from 'react-burger-menu'
import { useMediaQuery } from 'react-responsive'
import { SCREEN } from '../responsive';
import menuStyles from './menuStyles';
import { HomeIcon, PhoneIcon, ShoppingCartIcon, AdjustmentsIcon } from '@heroicons/react/outline';
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
    // bg-white
    outline-none
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

const AnimationBox = styled.div`
    ${tw`
        relative
        // bg-red-500
        // overflow-hidden
    `}
    top: 0px;
    left: 0;
    width:90px;
    height: 58px;
    transition: 0.5s linear;
    transform-style: preserve-3d;

 

    .div-animation,
    .icon__navigation{
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center; 
        position: absolute;
        left: 0;
        top: 0;
        text-align: center;
        transition: all 0.5s linear;
    }

    .icon__navigation{
        transform: translateZ(29px);
    }

    .div-animation {
        // background-color: #343434;
        font-size: 15px;
        // color: #f3f3f3;
        transform: rotateX(-90deg) translateZ(29px);
    }   

    :hover{
        transform: rotateX(90deg);
        transition: 0.5s linear;
    }

    @media (min-width: ${SCREEN.lg}) and (max-width: ${SCREEN.xl}){
        width: 60px;
        .div-animation{
            font-size: 13px;
        }
    }
  

`

export function NavItems(props: any) {

    const history = useHistory();

    const isMobile = useMediaQuery({ maxWidth: SCREEN.sm })

    // const { state } = useContext(AuthContext);
    // const { dispatch } = useContext(AuthContext);

    // const user = state.user;

    // console.log();

    return (
        <>
            {!isMobile && (
                <ListContainer>
                    <NavItem className={history.location.pathname === '/' ? "activeS" : ""} >
                        <Link to="/" className="flex items-center">
                            <AnimationBox>
                                <div className="icon__navigation" >
                                    <HomeIcon style={{ height: "25px" }} />
                                </div>
                                <div className="div-animation">Home</div>
                            </AnimationBox>
                        </Link>
                    </NavItem>
                    <NavItem className={history.location.pathname === '/cars' ? "activeS" : ""}>
                        <Link to="/cars" className="flex items-center">
                            <AnimationBox>
                                <div className="icon__navigation" >
                                    <ShoppingCartIcon style={{ height: "25px" }} />
                                </div>
                                <div className="div-animation">Cars</div>
                            </AnimationBox>
                        </Link>
                    </NavItem>
                    <NavItem className={history.location.pathname === '/categories' ? "activeS" : ""}>
                        <Link to="/categories" className="flex items-center">
                            <AnimationBox>
                                <div className="icon__navigation" >
                                    <AdjustmentsIcon style={{ height: "25px" }} />
                                </div>
                                <div className="div-animation">Categories</div>
                            </AnimationBox>
                        </Link>
                    </NavItem>
                    <NavItem className={history.location.pathname === '/contact' ? "activeS" : ""}>
                        <Link to="/contact" className="flex items-center">
                            <AnimationBox>
                                <div className="icon__navigation" >
                                    <PhoneIcon style={{ height: "25px" }} />
                                </div>
                                <div className="div-animation">Contact</div>
                            </AnimationBox>
                        </Link>
                    </NavItem>
                    {/* {user ? <NavItem } >{user.username}</NavItem> : <NavItem ><Link to="/login" className="flex items-center">Login</Link></NavItem>} */}
                </ListContainer>
            )}
            {isMobile && (
                <>
                    <Menu right styles={menuStyles}>
                        <ListContainer>
                            <NavItem ><Link to="/" className="flex w-full items-center text-lg"> <HomeIcon style={{ height: "18px" }} />Home</Link></NavItem>
                            <NavItem ><Link to="/cars" className="flex w-full items-center text-lg"><ShoppingCartIcon style={{ height: "18px" }} />Cars</Link></NavItem>
                            <NavItem ><Link to="/categories" className="flex w-full items-center text-lg"><AdjustmentsIcon style={{ height: "18px" }} />Categories</Link></NavItem>
                            <NavItem ><Link to="/contact" className="flex w-full items-center text-lg"><PhoneIcon style={{ height: "18px" }} />Contact</Link></NavItem>
                        </ListContainer>
                    </Menu>
                </>
            )}
        </>
    );

}