import styled from "styled-components";
import { ReactNode } from "react";

interface DealDescriptionProps {
  children: ReactNode;
  alignSelfPosition?: string;
}

const StyledDescription = styled.div.withConfig({
  shouldForwardProp: prop => prop !== "alignSelfPosition",
})<DealDescriptionProps>`
  display: flex;
  flex-direction: column;
  align-items: ${({ alignSelfPosition }) => alignSelfPosition || "start"};
  gap: 7px;

  color: #ffff;
  font-family: "Lato";
  font-size: clamp(14px, 3vw, 18px);
  font-weight: 700;
  white-space: nowrap;
`;

const DealDescription = ({
  children,
  alignSelfPosition,
}: DealDescriptionProps) => {
  return (
    <StyledDescription alignSelfPosition={alignSelfPosition}>
      {children}
    </StyledDescription>
  );
};

export default DealDescription;
