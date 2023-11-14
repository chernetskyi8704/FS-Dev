import styled from "styled-components";
import ImageSection from "../components/ImageSection";
import LoginSection from "../components/LoginSection";

const AuthPageWrapper = styled.div`
  display: flex;
  width: 100%;
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
