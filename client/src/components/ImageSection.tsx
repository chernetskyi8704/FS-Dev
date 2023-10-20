import styled from "styled-components";
import FlexSection from "./FlexSection";
import styledImageSection from "/src/assets/b2f7ebf3957623e4989fbd343e95450f.png";

const StyledImageSection = styled(FlexSection)`
  flex: 1;
  background: url(${styledImageSection}) no-repeat center;
  background-size: cover;
`;

const ImageSection = () => {
  return <StyledImageSection></StyledImageSection>;
};

export default ImageSection;
