import styled from "styled-components";
import { HomeIcon, PhoneIcon, ShoppingCartIcon, AdjustmentsIcon } from '@heroicons/react/outline';
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import { Link, useHistory, useRouteMatch } from 'react-router-dom'
import { SCREEN } from '../responsive'

interface ThemeToggleProps {
  isDark?: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNavDiv = styled.div`
  display: none;

  @media (min-width: 300px) and (max-width: ${SCREEN.lg}) {
    display: flex;
    position: fixed;
    bottom: 0;
    right: 0;
    color: var(--secondary-text);
    z-index: 99;

    .items {
      display: flex;
      pointer-events: none;
      opacity: 0;
      transform: translateX(3rem);
      flex-direction: column;
      gap: 0.5rem;
      background-color: var(--comment-background);
      color: var(--secondary-text);
      padding: 1rem 1.5rem 1rem 0.75rem;
      border-radius: 1rem 0 0 1rem;
      box-shadow: 0.5rem 0.5rem 1rem #0005;
      position: fixed;
      right: 0;
      bottom: 5.5rem;
      transition: all 0.2s;

      .item {
        display: flex;
        align-items: center;
        padding: 0.25rem 3rem 0.25rem 0.5rem;
        border-radius: 1rem;
        cursor: pointer;
        transition: background 0.2s;

        &:hover {
          background: #88a2;
        }
        &.active {
          color: var(--blue);
        }
        svg {
          margin-right: 1rem;
          width: 1.25rem;
        }
      }
    }

    .toggle {
      width: 3rem;
      height: 3rem;
      border-radius: 99px;
      background-color: var(--comment-background);
      box-shadow: 0 0.5rem 1rem #0002;
      position: fixed;
      right: 1.5rem;
      bottom: 1.5rem;
      display: grid;
      place-items: center;
      transition: all 0.2s;
      cursor: pointer;
      z-index: 99;

      span {
        display: block;
        position: relative;
        height: 2px;
        width: 1.5rem;
        background: var(--secondary-text);
        border-radius: 3px;
        transition: all 0.2s;

        &::before,
        &::after {
          position: absolute;
          content: "";
          height: 2px;
          width: 1.5rem;
          background: var(--secondary-text);
          border-radius: 3px;
          transition: all 0.2s;
        }
        &::before {
          transform: translateY(-6px);
        }
        &::after {
          transform: translateY(6px);
        }
      }
    }

    &.open {
      .items {
        pointer-events: auto;
        opacity: 1;
        transform: translateX(0);
      }
      .toggle {
        background: var(--notification-badge);

        span {
          background: var(--notification-badge);
          &::before {
            background: #fff;
            transform: translate(0) rotate(45deg);
          }
          &::after {
            background: #fff;
            transform: translate(0) rotate(-45deg);
          }
        }
      }
    }
  }
`;

export function LaptopAndTabletNav(props: ThemeToggleProps) {

  const { isDark, setIsDark } = props;
  const [isOpen, setIsOpen] = useState(false);

  const history = useHistory();
  const router = useRouteMatch();

  // console.log(router);

  return (
    <MobileNavDiv className={isOpen ? "open" : ""}>
      <div
        className="toggle"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span></span>
      </div>
      <div className="items">
        <div
          // onClick={() => history.push("/")}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className={`item ${router.path === "/" ? "active" : ""}`}
        >
          <Link to="/" className="flex items-center"><HomeIcon /> Home </Link>
        </div>
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          // onClick={() => history.push("/cars")}
          className={`item ${router.path === "/cars" ? "active" : ""}`}
        >
          <Link to="/cars" className="flex items-center"><ShoppingCartIcon /> Cars</Link>
        </div>
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          // onClick={() => history.push("/categories")}
          className={`item ${router.path === "/categories" ? "active" : ""}`}
        >
          <Link to="/categories" className="flex items-center"><AdjustmentsIcon /> Categories</Link>
        </div>
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="item">
          <Link to="/" className="flex items-center"><PhoneIcon /> Contact</Link>
        </div>
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="w-full h-full">
          <ThemeToggle icon text className="item" isDark={isDark} setIsDark={setIsDark} />
        </div>
      </div>
    </MobileNavDiv>
  );
}
