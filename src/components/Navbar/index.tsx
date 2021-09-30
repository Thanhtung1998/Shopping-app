import { SearchIcon } from "@heroicons/react/outline";
import React, { useState, useEffect } from "react"
import styled from "styled-components";
import tw from "twin.macro"
import { Logo } from "../Logo";
import { NavItems } from "./NavItems";
import { SCREEN } from "../responsive";
import "../../css/navbar.css";
import { NavUser } from './NavUser'
import { useMediaQuery } from 'react-responsive'


const NavbarContainer = styled.div`
    min-height: 58px;
    // background: linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(238,142,162,1) 100%);
    z-index: 1000;
    ${tw`
    w-full
    flex
    flex-row
    flex-wrap
    items-center
    justify-center
    fixed
    top-0
    left-0
    `}
`

const NavbarContent = styled.div`
    height: 100%;
${tw`
    w-full
    flex
    flex-row
    items-center
    lg:pl-12
    lg:pr-12
    justify-between
`}
`

const NavbarSearch = styled.div`
    height: 100%;
    width: 60%;
    ${tw`
    flex
    items-center
    justify-center
    bg-transparent
    `}

    @media (min-width: ${SCREEN.sm} ){
        width: 48%;
    }
    @media (min-width: ${SCREEN.md} ){
        width: 38%;
    }
    @media (min-width: ${SCREEN.lg} ){
        width: 40%;
    }
    @media (min-width: ${SCREEN.xl} ){
        width: 25%;
    }
    @media (min-width: ${SCREEN["2xl"]} ){
        width: 30%;
    }

`

const NavbarSearchBox = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 50px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    --tw-shadow: 4px 4px 6px -1px rgba(0, 0, 0, 0.1), 4px 2px 4px -1px rgba(0, 0, 0, 0.06);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    // background: white;
    ${tw`
        flex
        items-center
        justify-center
        bg-white
        h-5/6
        overflow-hidden
    `};
    @media (max-width: ${SCREEN.md}) {
        display: none;
        }
`

const NavbarSearchInput = styled.input`

    ${tw`
        w-full
        outline-none
        h-full
        flex
        items-center
        `
    }
`

const NavbarSearchMobile = styled.div`
height: 58px;
${tw`
    w-full
    relative
    top-0
    block
    md:hidden
    `
    }
`

const NavbarSearchMobileBox = styled.div`
    height: 40px;
    top: 30px;
    // transform: translateY(-50%);
    right: 0px;
    left: 0px;
    margin: auto;    
    width: 94%;
    animation: top-to-bottom 1s linear forwards;
    ${tw`
        absolute
        hidden
        sm:hidden
        rounded-full
        `
    };

    @keyframes top-to-bottom{
        0%{
            transform: translateY(-25);
            width: 0%;
            opacity: 0;
        }
        25%{
            transform: translateY(0%);
            width: 25%;
            opacity: 0;
        }
        50%{
            transform: translateY(25%);
            width: 50%;
            opacity: 0;
        }
        75%{
            transform: translateY(65%);
            width: 75%;
            opacity: 0.5;
        }
        100%{
            transform: translateY(100%);
            width: 100%;
            opacity: 1;
        }
    }

`


const NavbarSearchMobileInput = styled.input`
    padding-left: 5px;
    ${tw`
        h-full
        w-full
        rounded-full
        outline-none
        flex
        items-center
        justify-center
        text-center
        border-2
        // opacity-80
        focus:border-blue-500
        // focus:opacity-50
        overflow-hidden
        bg-gray-400
        text-white
    `};

    ::-webkit-input-placeholder{
        // line-height: 18px;
        font-size: 16px;
        color: #0097ff;
        flex
        items-center
        justify-center
        text-center
       
    }

`

const LogoContainer = styled.div`

    `



export function Navbar(props: any) {


    const [open, setOpen] = useState(0);

    const handleMobileOpenInput = () => {

        const MobileSearchOpen = document.querySelector(NavbarSearchMobileBox);
        if (open === 0) {
            MobileSearchOpen?.setAttribute('style', 'display:block');
            setOpen(1);
        }
        // console.log(MobileSearchOpen);
        else {
            MobileSearchOpen?.setAttribute('style', 'display:none');
            setOpen(0);
        }
    }
    const isMobile = useMediaQuery({ maxWidth: SCREEN.md })

    const [navbar, setNavbar] = useState(false)

    const changeBackground = () => {
        // console.log(window.scrollY)
        if (window.scrollY >= 80) {
            setNavbar(true);
        }
        else {
            setNavbar(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeBackground)
        return () => {
            window.removeEventListener('scroll', changeBackground)
        }
    }, [])


    return (
        <NavbarContainer className={navbar ? "header" : ""} >
            <div className="w-full absolute top-0 bottom-0 left-0 right-0 m-auto flex items-center justify-center">
                <NavbarContent>
                    <LogoContainer>
                        <Logo />
                    </LogoContainer>

                    <div className="flex space-x-12 lg:space-x-3 justify-around">
                        {isMobile && (
                            <div className="flex items-center absolute justify-center" style={{ top: "50%" }}>
                                <SearchIcon style={{ zIndex: 10, height: "25px", cursor: "pointer", position: "absolute", top: "-50%", transform: "translateY(-50%)", right: "24px", color: "gray" }} onClick={handleMobileOpenInput} />
                            </div>
                        )}
                        <NavUser />
                        <NavItems />
                    </div>
                </NavbarContent>
            </div>
            <div className={navbar ? "inputAnimationScroll" : isMobile ? "inputAnimationScroll" : "inputAnimationScrollDefalut"}>
                <NavbarSearch>
                    <NavbarSearchBox>
                        <div className="searchIcon">
                            <SearchIcon style={{ height: "18px" }} />
                        </div>
                        <NavbarSearchInput placeholder="Tìm kiếm trong shop" />
                    </NavbarSearchBox>
                    <NavbarSearchMobile>
                        <NavbarSearchMobileBox>
                            <NavbarSearchMobileInput placeholder="Tìm kiếm trong shop" />
                        </NavbarSearchMobileBox>
                    </NavbarSearchMobile>
                </NavbarSearch>
            </div>
        </NavbarContainer>

    );
}