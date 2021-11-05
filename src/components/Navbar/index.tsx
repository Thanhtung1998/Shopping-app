import { SearchIcon } from "@heroicons/react/outline";
import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components";
import tw from "twin.macro"
import { Logo } from "../Logo";
import { NavItems } from "./NavItems";
import { SCREEN } from "../responsive";
import "../../css/navbar.css";
import { NavUser } from './NavUser'
import { useMediaQuery } from 'react-responsive'
import { Search, Menu } from "react-feather";
import ThemeToggle from "./ThemeToggle";
import { LaptopAndTabletNav } from './LaptopAndTabletNav'

const NavbarContainer = styled.div`
    min-height: 58px;
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
    .mobile-css{
        ${tw`
        h-full
        w-full
        flex
        items-center
        justify-between
        
    `}
    z-index: 1000;
    }
`

const HeaderSection = styled.header`
  position: fixed;
  top: 0;
  color: gray;
  ${tw`
    w-full
  `}
  height: 58px;
  transition: background 0.2s, border-bottom 0.2s;

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--surface-background);
    border-radius: 99px;
    display: flex;
    align-items: center;
    left: 0;
    top: 0;
    transition: all 0.2s;

    label,
    input,
    .guestNumber {
      background: none;
      font-size: 14px;
      border: none;
      line-height: 1.5;
      display: block;
      color: var(--dark);
      outline: none;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    input {
      width: 100%;
      font-weight: 700;

      &::placeholder {
        color: var(--dark);
        font-weight: 400;
        opacity: 0.5;
      }
    }
    .guestNumber {
      font-weight: 700;
      .empty {
        color: var(--dark);
        font-weight: 400;
        opacity: 0.5;
      }
    }
    .field {
      width: 100%;
      padding: 0.5rem 1.5rem;
      border-radius: 99px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      transition: background 0.2s;
      position: relative;

      & + .field::before {
        position: absolute;
        content: "";
        width: 2px;
        height: 2rem;
        background: var(--gray);
        border-radius: 2px;
        left: 0;
        transition: transform 0.2s;
      }
      &:hover,
      &:focus-within {
        background: var(--gray);
      }

      &:last-of-type {
        padding-right: 10rem;
      }
    }
  }
  .overlay:hover .field::before,
  .overlay:focus-within .field::before {
    transform: scale(0);
  }

  .user,
  .profile,
  .logo,
  .globe,
  nav {
    display: flex;
    align-items: center;
  }

  .headerInner {
    // max-width: var(--containerWidth);
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    ${tw`
    h-full
    flex
    justify-between
    max-w-screen-2xl
    `}
  }

  & > div {
    flex: 0 0 20%;
  }
  .profile {
    justify-content: flex-end;
    white-space: nowrap;
    svg {
      height: 1.15rem;
    }
    a,
    .themeToggle {
      margin-right: 0.4rem;
    }
    .userIcon {
      background: #2e2e48;
      border-radius: 99px;
      height: 30px;
      width: 30px;
      color: #fafafc;
    }
    .user {
      background: #fafafc;
      border-radius: 99px;
      padding: 0.25rem 0.25rem 0.25rem 0.5rem;
    }
    .menu {
      color: #2e2e48;
      margin-right: 0.5rem;
    }
  }

  form {
    position: absolute;
    transform: translate(-50%, 100%);
    left: 50%;
    margin: auto;
    background-color: var(--comment-background);
    padding: 0.5rem;
    border-radius: 99px;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 720px;
    // margin: 1.5rem 0;
    width: 60vw;
    box-shadow: 0 1rem 3rem -1rem #1e1e38;
    transition: all 0.2s;
    transform-origin: center;
    height: 58px;
    & * {
      transition: all 0.2s;
    }

    input:focus > form {
        background: red;
    }

    & > input {
        height: 100%;
      background: none;
      border: none;
      font-size: 1.4rem;
      flex: 1;
      padding: 0 1.5rem;
      color:var(--secondary-icon);
      outline: none;
    
      &::placeholder {
        color: var(--dark);
        opacity: 0.6;
      }
    }
    & > button {
      background: var(--red);
      color: #fafafc;
      border: none;
      padding: 0.5rem calc(1.75rem / 2);
      height: 100%;
      max-width: 300px;
      display: flex;
      align-items: center;
      border-radius: 99px;
      font-weight: 700;
      font-size: 1rem;
      overflow: hidden;
      z-index: 2;

      &:hover:not(:disabled) {
        box-shadow: 0 0 0 2px var(--white), 0 0 0 4px var(--red);
      }

      &:disabled {
        opacity: 0.5;
      }
    }
    & > button svg {
      height: 1.25rem;
      margin-right: 0.75rem;
      flex: 0 0 1.25rem;
      color: var(--secondary-icon);
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  @media (max-width: ${SCREEN.sm}) {
    .profile,
    .logo,
    nav,
    form > button span {
      display: none;
    }
    .overlay {
      display: none;
    }
    .headerInner {
      grid-template-columns: 1fr;
    }
    form {
      position: relative;
      transform: none !important;
      width: 100% !important;
      left: unset;
      top: 0;
      margin: 0;
      & > input {
        padding: 0 1rem;
        font-size: 1rem;
      }
      & > button {
        width: 2.5rem;
        height: 2.5rem;
        padding: 0 0.6rem;
      }
      & > button svg {
        height: 1rem;
        width: 1rem;
      }
    }
  }

  @media (min-width: ${SCREEN.sm}) and (max-width: ${SCREEN.lg}) {
    nav {
      display: none;
    }
    .headerInner {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: ${SCREEN.sm}){
    div.profile.user{
      display: none;
    }
  }

  @media (min-width: ${SCREEN.sm}) and (max-width: ${SCREEN.md}){

    background: var(--light);
   
    
    form {
        display: flex;
        align-items: center;
        justify-items: center;
        // width: 40%;
        height: 58px;
        transform: translate(-50%, 100%);
       
        & > input {
            width:80%;
            height: 100%;
            padding: 0 1rem;
            font-size: 1rem;
        }
        & > button {
            width: 2.5rem;
            height: 2.5rem;
            padding: 0 0.6rem;
        }
        & > button svg {
            height: 1rem;
            width: 1rem;
        }
    }
    
    .profile {
      .active__icon{
        z-index: 10;
      }
    } 
}

  &.scrolled:not(.inputFocus) {
    background-color: var(--surface-background);
    color: var(--dark);
    border-bottom: 2px solid var(--gray);

    .overlay {
      opacity: 0;
      pointer-events: none;
    }

    nav {
      opacity: 0;
      pointer-events: none;
    }
    .logo svg {
      color: var(--red);
    }
    .user {
      // z-index: 10;
      box-shadow: 0 0 0 2px var(--gray);
    }
    form {
      box-shadow: 0 0 0 2px var(--gray);
      transform: translate(-50%,-1%) scale(0.83);
      width: 480px;
      & > button {
        max-width: 3rem;
      }
      & > button span {
        opacity: 0;
      }
    }
    
    @media (max-width: 36rem) {
      padding-top: 1rem;
      padding-bottom: 1rem;

      form {
        padding: 0;
        box-shadow: none;
        background: var(--gray);
      }
    }

    @media (min-width: ${SCREEN.md}) and (max-width: ${SCREEN.lg}) {
        .profile {
          opacity: 1;
          // pointer-events: none;
        }
        form {
          // display: none;
          // left: 0;
          // margin: auto;
          // right: 0;
          transform: translate(-50% , 1%) scale(0.83);
          width: 480px;
        }
    }
  }

  &.inputFocus {
    color: var(--dark);

    .logo svg {
      color: var(--red);
    }

    form {
      background-color: var(--surface-background);
      width: 100%;
      box-shadow: 0 1rem 1.5rem -0.5rem #0001;
    }
  }
`;


const Profile = styled.div`


div.profile {
  justify-content: flex-end;
  white-space: nowrap;
  svg {
    height: 1.15rem;
  }
  a,
  .themeToggle {
    margin-right: 0.4rem;
  }
  .userIcon {
    background: #2e2e48;
    border-radius: 99px;
    height: 30px;
    width: 30px;
    color: #fafafc;
  }
  .user {
    display: flex;
    justify-content: center;
    align-items:center;
    background: #fafafc;
    border-radius: 99px;
    padding: 0.25rem 0.25rem 0.25rem 0.5rem;
  }
  .menu {
    color: #2e2e48;
    margin-right: 0.5rem;
  }
}

`

export function Navbar(props: any) {

  const Mode = (localStorage.getItem("ShoppingAppTheme")) === "dark";
  // const [open, setOpen] = useState(0);
  const headerRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeUser, setActiveUser] = useState(false)
  const [isDark, setIsDark] = useState(Mode);
  const isTablet = useMediaQuery({ maxWidth: SCREEN.md })
  const isLaptop = useMediaQuery({ maxWidth: SCREEN.lg })
  const isMobile = useMediaQuery({ maxWidth: SCREEN.sm });


  useEffect(() => {

    const onScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <NavbarContainer>

      {isMobile && (
        <div className="mobile-css">
          <Logo />
          <div className="flex items-center justify-center mr-6">
            <SearchIcon style={{ width: "25px", marginRight: "10px", color: "gray" }} onClick={() => console.log("hello")} />
            <Profile className="flex items-center justify-center">
              <div className="profile cursor-pointer">
                <div onClick={() => setActiveUser(!activeUser)} className="user">
                  <Menu className="menu" />
                  <div className="userIcon">
                    <NavUser activeUser={activeUser} setActiveUser={setActiveUser} />
                  </div>
                </div>
              </div>
            </Profile>

            {/* <NavItems /> */}
          </div>

        </div>
      )}
      <HeaderSection ref={headerRef} className={scrolled ? "scrolled" : ""}>

        <div className="headerInner">

          <div onClick={() => console.log("logo")} className="logo">
            <Logo></Logo>
          </div>

          {/* <MobileNav /> */}
          {!isMobile && (
            <form className="search">
              <input
                type="text"
                placeholder={props.placeholder ? props.placeholder : "Where are you going?"}
                required
              />
              <button
                type="submit"
                aria-label="search places"
              >
                <Search />
                <span>Search</span>
              </button>
            </form>
          )}

          <LaptopAndTabletNav isDark={isDark} setIsDark={setIsDark} />

          {/* <ThemeToggle icon className="active__icon" isDark={isDark} setIsDark={setIsDark} /> */}

          <div className="flex items-center justify-center mr-2 z-10">
            {!isLaptop && (
              <>
                <NavItems />
              </>
            )}
            <div onClick={() => console.log('hello')} className="profile cursor-pointer z-10">
              <ThemeToggle icon isDark={isDark} setIsDark={setIsDark} className="active__icon" />
              <div onClick={() => setActiveUser(!activeUser)} className="user">
                <Menu className="menu" />
                <div className="userIcon">
                  <NavUser activeUser={activeUser} setActiveUser={setActiveUser} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </HeaderSection>
    </NavbarContainer>
  );
}

