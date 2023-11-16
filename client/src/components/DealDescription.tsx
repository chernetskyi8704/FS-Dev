import styled from "styled-components";
import { ReactNode } from "react";

interface DealDescriptionProps {
  children: ReactNode;
  styles: {
    bottom: string;
    left: string;
    height: string;
    fontFamily: string;
    fontSize: string;
    lineHeight: string;
  };
}

const StyledDescription = styled.p<DealDescriptionProps>`
  position: absolute;
  color: #ffff;

  bottom: ${({ styles }) => styles.bottom};
  left: ${({ styles }) => styles.left};
  width: auto;
  height: ${({ styles }) => styles.height};

  font-family: ${({ styles }) => styles.fontFamily};
  font-size: ${({ styles }) => styles.fontSize};
  font-style: normal;
  font-weight: 700;
  line-height: ${({ styles }) => styles.lineHeight};
`;

const DealDescription = (props: DealDescriptionProps) => {
  return <StyledDescription {...props} />;
};

export default DealDescription;
