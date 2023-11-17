import styled from "styled-components";
import RightNavigation from "./RightNavigation";
import { IStyledBurger } from "../../types/IStyledBurgerProps";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { allUserSettingsProperties, setIsBurgerMenuOpen } from "../../store/fatures/userSettings/userSettingsSlice";

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
  const dispatch = useAppDispatch();
  const { isBurgerMenuOpen } = useAppSelector(allUserSettingsProperties);

  return (
    <>
      <StyledBurger
        open={isBurgerMenuOpen}
        onClick={() => {
          !isBurgerMenuOpen
            ? (document.body.style.overflow = "hidden")
            : (document.body.style.overflow = "auto");

          dispatch(setIsBurgerMenuOpen(!isBurgerMenuOpen));
        }}
      >
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNavigation open={isBurgerMenuOpen} />
    </>
  );
};

export default Burger;
