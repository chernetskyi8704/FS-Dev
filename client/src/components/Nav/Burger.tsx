import styled from "styled-components";
import { useState } from "react";
import RightNavigation from "./RightNavigation";
import { IStyledBurger } from "../../types/IStyledBurgerProps";

const StyledBurger = styled.div<IStyledBurger>`
  width: 2rem;
  height: 2rem;
  position: fixed;
  cursor: pointer;
  top: 20px;
  right: 30px;
  z-index: 20;
  display: none;

  @media ${props => props.theme.media.tablet} {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#172234" : "#fff")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.2s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <StyledBurger open={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNavigation open={isOpen} />
    </>
  );
};

export default Burger;
