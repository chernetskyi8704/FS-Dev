import styled from "styled-components";
import FlexSection from "./FlexSection";

const Image = styled.img`
  height: 100%;
  max-width: 100%;
`;

const ImageSection = () => {
  return (
    <FlexSection>
      <Image src="/src/assets/b2f7ebf3957623e4989fbd343e95450f.png" />
    </FlexSection>
  );
};

export default ImageSection;
