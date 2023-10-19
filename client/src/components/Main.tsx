import styled from "styled-components";
import AppRouter from "./routes/AppRouter";

const StyledMain = styled.main`
  flex: 1 auto;
  min-height: 100%;
`;

const Main = () => {
  return (
    <StyledMain>
      <AppRouter />
    </StyledMain>
  );
};

export default Main;
