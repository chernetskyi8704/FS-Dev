import styled from "styled-components";
import ImageSection from "../components/ImageSection";
import LoginSection from "../components/LoginSection";
import FlexSection from "../components/FlexSection";

const AuthPageWrapper = styled(FlexSection)`
  width: 1440px;
  height: 100%;
`;

const AuthPage = () => {
  return (
    <AuthPageWrapper>
      <ImageSection />
      <LoginSection />
    </AuthPageWrapper>
  );
};

export default AuthPage;
