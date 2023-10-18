import { ReactNode } from "react";
import styled from "styled-components";

interface SpanProps {
  children: ReactNode;
}

const StyledSpan = styled.span``;

const Span = (props: SpanProps) => {
  return <StyledSpan {...props} />;
};

export default Span;
