import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setIsUserLoggedIn, allAuthStateProperties, setIsRegistering } from "../../store/fatures/auth/authSlice";
import { NavLink } from "react-router-dom";
import { IStyledBurger } from "../../types/IStyledBurgerProps";
import Link from "../Link";

interface INavigatoionItem {
  name: string;
  link: string;
  onClick?: () => void;
  style: {
    backgroundColor: string;
    textColor: string;
  };
}

const StyledLogout = styled(NavLink)`
  color: red;
  font-size: 20px;
`;

const UL = styled.ul<IStyledBurger>`
  display: flex;
  gap: 10px;

  @media ${props => props.theme.media.tablet} {
    height: 100%;
    width: 50%;

    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.3s ease-in-out;

    align-items: center;
    padding: 90px 0;
    gap: 25px;
    flex-flow: column nowrap;

    background-color: rgba(255, 255, 255, 0.9);

    position: fixed;
    top: 0;
    right: 0;
  }
`;

const RightNavigation = ({ open }: IStyledBurger) => {
  const dispatch = useAppDispatch();
  const { isUserLoggedIn } = useAppSelector(allAuthStateProperties);

  const navigationItems: INavigatoionItem[] = [
    {
      name: "Sign Up",
      link: "/sign-up",
      onClick: () => {
        dispatch(setIsRegistering(true));
      },
      style: {
        backgroundColor: "#b29f7e",
        textColor: "white",
      },
    },
    {
      name: "Log In",
      link: "/log-in",
      onClick: () => {
        dispatch(setIsRegistering(false));
      },
      style: {
        backgroundColor: "transparent",
        textColor: "#b29f7e",
      },
    },
  ];

  const renderItems = navigationItems.map(navigationItem => {
    return (
      <li key={navigationItem.link}>
        <Link
          to={navigationItem.link}
          style={navigationItem.style}
          onClick={navigationItem.onClick}
        >
          {navigationItem.name}
        </Link>
      </li>
    );
  });

  return (
    <UL open={open}>
      {!isUserLoggedIn ? (
        renderItems
      ) : (
        <StyledLogout
          to="/log-in"
          onClick={() => {
            dispatch(setIsUserLoggedIn(false));
          }}
        >
          Logout
        </StyledLogout>
      )}
    </UL>
  );
};

export default RightNavigation;
