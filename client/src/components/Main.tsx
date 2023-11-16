import styled from "styled-components";
import AppRouter from "./routes/AppRouter";

const StyledMain = styled.main`
  height: 100%;
  width: 100%;
`;

const Main = () => {
  return (
    <StyledMain>
      <AppRouter />
    </StyledMain>
  );
};

export default Main;
