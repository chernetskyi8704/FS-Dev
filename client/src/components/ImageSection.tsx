import styled from "styled-components";
import styledImageSectionImage from "/src/assets/b2f7ebf3957623e4989fbd343e95450f.png";

const StyledImageSection = styled.section`
  background: url(${styledImageSectionImage}) no-repeat center;
  min-width: 50%;
  background-size: cover;
`;

const ImageSection = () => {
  return <StyledImageSection></StyledImageSection>;
};

export default ImageSection;
