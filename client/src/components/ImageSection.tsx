import styled from "styled-components";
import styledImageSectionImage from "/src/assets/b2f7ebf3957623e4989fbd343e95450f.png";

const StyledImageSection = styled.section`
  flex: 0 1 50%;
  background: url(${styledImageSectionImage}) no-repeat center;
  background-size: cover;
`;

const ImageSection = () => {
  return <StyledImageSection></StyledImageSection>;
};

export default ImageSection;
