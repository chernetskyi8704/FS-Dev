import styled from "styled-components";
import { ReactNode } from "react";

type StyledSectionProps = {
  children: ReactNode;
};

const StyledSection = styled.section<StyledSectionProps>`
  display: flex;
  flex: 1;
`;

const FlexSection = (props: StyledSectionProps) => {
  return <StyledSection {...props} />;
};

export default FlexSection;
