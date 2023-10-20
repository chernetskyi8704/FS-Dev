import styled from "styled-components";
import AppRouter from "./routes/AppRouter";

const StyledMain = styled.main`
  width: 100%;
  height: 100%;
`;

const Main = () => {
  return (
    <StyledMain>
      <AppRouter />
    </StyledMain>
  );
};

export default Main;
