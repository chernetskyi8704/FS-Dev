import styled from "styled-components";
import { ReactNode } from "react";

interface DealDescriptionContainerProps {
  children: ReactNode;
}

const StyledDealDescriptionContainer = styled.div<DealDescriptionContainerProps>`
  display: grid;
  grid-template-columns: 1fr 1fr minmax(15%, auto);
  column-gap: 10px;

  @media ${props => props.theme.media.phone} {
    column-gap: 20px;
  }
`;

const DealDescriptionContainer = ({
  children,
}: DealDescriptionContainerProps) => {
  return (
    <StyledDealDescriptionContainer>{children}</StyledDealDescriptionContainer>
  );
};

export default DealDescriptionContainer;
