import styled from "styled-components";
import AppRouter from "./routes/AppRouter";

const StyledMain = styled.main`
  flex: 1 auto;
`;

const Main = () => {
  return (
    <StyledMain>
      <AppRouter />
    </StyledMain>
  );
};

export default Main;
