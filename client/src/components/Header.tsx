import styled from "styled-components";
import Link from "./Link";
import { NavLink } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../hooks/redux";
import {
  allAuthStateProperties,
  setIsUserLoggedIn,
} from "../store/fatures/auth/authSlice";
import { setIsRegistering } from "../store/fatures/auth/authSlice";

const Navigation = styled.nav`
  display: flex;
  height: 80px;
  width: 100%;
  padding: 18px 80px;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  background-color: #172234;
`;

const Logo = styled(NavLink)`
  font-size: 24px;
  color: white;
`;

const ListContainer = styled.ul`
  display: flex;
  gap: 10px;
`;

const ListItem = styled.li``;

const StyledLogout = styled(NavLink)`
  color: red;
  font-size: 20px;
`;

const Header = () => {
  const dispatch = useAppDispatch();
  const { isUserLoggedIn } = useAppSelector(allAuthStateProperties);

  return (
    <header>
      <Navigation>
        <Logo to="/">My Logo</Logo>
        {!isUserLoggedIn ? (
          <ListContainer>
            <ListItem>
              <Link
                to="/log-in"
                style={{
                  backgroundColor: "transparent",
                  textColor: "#b29f7e",
                }}
                onClick={() => {
                  dispatch(setIsRegistering(false));
                }}
              >
                Log In
              </Link>
            </ListItem>
            <ListItem>
              <Link
                to="/sign-up"
                style={{
                  backgroundColor: "#b29f7e",
                  textColor: "white",
                }}
                onClick={() => {
                  dispatch(setIsRegistering(true));
                }}
              >
                Sign Up
              </Link>
            </ListItem>
          </ListContainer>
        ) : (
          <ListItem>
            <StyledLogout
              to="/log-in"
              onClick={() => {
                dispatch(setIsUserLoggedIn(false));
              }}
            >
              Logout
            </StyledLogout>
          </ListItem>
        )}
      </Navigation>
    </header>
  );
};

export default Header;
