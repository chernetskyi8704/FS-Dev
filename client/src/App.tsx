import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  user-select: none;
`;

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <Main />
    </AppWrapper>
  );
};

export default App;
