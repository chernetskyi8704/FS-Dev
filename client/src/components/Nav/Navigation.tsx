import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Burger from "./Burger";

const NavigationWrapper = styled.nav`
  display: flex;
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 90px;
  padding: 0px 70px;
  align-items: center;
  justify-content: space-between;
  background-color: #172234;

  .logoWrapper {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  @media ${props => props.theme.media.laptop} {
    height: 70px;
  }
`;

const Logo = styled(NavLink)`
  font-size: 24px;
  color: white;
`;

const Navigation = () => {
  return (
    <NavigationWrapper>
      <div className="logoWrapper">
        <Logo to="/">My Logo</Logo>
      </div>
      <Burger />
    </NavigationWrapper>
  );
};

export default Navigation;
