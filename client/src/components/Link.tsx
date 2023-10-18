import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface LinkProps {
  children: ReactNode;
  to?: string;
  style: {
    backgroundColor?: string;
    textColor?: string;
  };
}

const StyledLink = styled(NavLink)<LinkProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 44px;
  border: 1px solid #b29f7e;
  border-radius: 5px;
  font-family: Merriweather;
  font-weight: 700;
  cursor: pointer;
  background-color: ${({ style }) => style.backgroundColor};
  color: ${({ style }) => style.textColor};
`;

const Link = (props: LinkProps) => {
  return <StyledLink {...props} />;
};

export default Link;
