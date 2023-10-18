import styled from "styled-components";
import Link from "./Link";
import { NavLink } from "react-router-dom";

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

const Header = () => {
  return (
    <header>
      <Navigation>
        <Logo to="/">My Logo</Logo>
        <ListContainer>
          <ListItem>
            <Link
              to="/log-in"
              backgroundColor={"transparent"}
              textColor={"#b29f7e"}
            >
              Log In
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/sign-up" backgroundColor={"#b29f7e"} textColor={"white"}>
              Sign Up
            </Link>
          </ListItem>
        </ListContainer>
      </Navigation>
    </header>
  );
};

export default Header;
